import Article from '../types/article';
import HackerNewsArticle from './hackerNews.article';
import Source from '../types/source';
import axios from 'axios';

const hackerNews: Source<HackerNewsArticle[]> = {
  name: 'Hacker News',
  identifier: 'hacker-news-co-uk',
  aggregate: async (): Promise<HackerNewsArticle[]> => {
    const articleList: string[] = await axios(
      'https://hacker-news.firebaseio.com/v0/newstories.json'
    ).then((response) => response.data as string[]);

    return Promise.all(
      articleList.map((id: string) =>
        axios(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        ).then((response) => response.data)
      )
    );
  },
  parse: (item: HackerNewsArticle[]): Article[] => {
    return item.map(
      (aggregated: HackerNewsArticle): Article => ({
        id: aggregated.id,
        title: aggregated.title,
        content: aggregated.by,
        originalUrl: aggregated.url,
      })
    );
  },
};

export default hackerNews;
