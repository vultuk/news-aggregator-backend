import { Request, Response } from 'express';

import { Firestore } from '@google-cloud/firestore';

export default async (
  req: Request,
  res: Response,
  db: Firestore
): Promise<void> => {
  await db.collection('/merchants').get();
  res
    .json({
      success: true,
      queryValues: req.query,
    })
    .end();
};
