import { Request, Response } from 'express';

import Article from '../types/article';
import Source from '../types/source';
import { addArticles } from '../services/articleStorage';
import hackerNews from '../sources/hackerNews';
import newsApi from '../sources/newsApi';

const aggregateSources: Source<any>[] = [hackerNews, newsApi];

export default async (req: Request, res: Response): Promise<void> => {
  // Loop through our news sources and get the information
  const articles: Article[] = (
    await Promise.all(
      aggregateSources.map(async (source: Source<unknown>) => {
        console.log(`Aggregating from ${source.name}`);

        return source.parse(await source.aggregate('1'));
      })
    )
  ).reduce(
    (previous: Article[], current: Article[]) => [...previous, ...current],
    []
  );

  // Store new articles in the database
  await addArticles(articles);

  res
    .json({
      success: true,
      message: `Collected news from ${aggregateSources.length} source${
        aggregateSources.length > 1 ? 's' : ''
      }`,
    })
    .end();
};
