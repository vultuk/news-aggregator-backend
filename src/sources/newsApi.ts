import NewsApiArticle, { NewsApiSingleArticle } from './newsApi.article';

import Article from '../types/article';
import Source from '../types/source';
import axios from 'axios';

const newsApi: Source<NewsApiArticle> = {
  name: 'News API',
  identifier: 'news-api',
  aggregate: async (): Promise<NewsApiArticle> =>
    axios(
      `https://newsapi.org/v2/top-headlines?country=hu&apiKey=66e70f4919f542418da0f085c66c855b`
    ).then((response) => response.data as NewsApiArticle),
  parse: (item: NewsApiArticle): Article[] => {
    return item.articles.map(
      (aggregated: NewsApiSingleArticle): Article => ({
        id: aggregated.publishedAt,
        title: aggregated.title,
        content: aggregated.content,
        originalUrl: aggregated.url,
      })
    );
  },
};

export default newsApi;
