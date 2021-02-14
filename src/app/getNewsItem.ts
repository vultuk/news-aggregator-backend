import { Request, Response } from 'express';

import { getArticle } from '../services/articleStorage';

export default async (req: Request, res: Response): Promise<void> => {
  res.json(await getArticle(req.params.id)).end();
};
