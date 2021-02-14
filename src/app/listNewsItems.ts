import { Request, Response } from 'express';

import { getArticles } from '../services/articleStorage';

export default async (req: Request, res: Response): Promise<void> => {
  res.json(await getArticles()).end();
};
