type NewsApiArticle = {
  status: string;
  totalResults: number;
  articles: NewsApiSingleArticle[];
};

export type NewsApiSingleArticle = {
  author: string;
  title: string;
  description: string;
  url: string;
  urltoImage: string;
  publishedAt: string;
  content: string;
};

export default NewsApiArticle;
