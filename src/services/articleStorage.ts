import Article from '../types/article';

let currentDatabase: Article[] = [];

export const getArticles = async (): Promise<Article[]> => currentDatabase;

export const getArticle = async (id: string): Promise<Article | undefined> =>
  currentDatabase.find((i) => i.id === id);

export const addArticles = async (articles: Article[]): Promise<void> => {
  currentDatabase = [...currentDatabase, ...articles];
};
