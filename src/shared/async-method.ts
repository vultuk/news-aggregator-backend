import { NextFunction, Request, Response } from 'express';

import { Firestore } from '@google-cloud/firestore';

export default (
  callback: (Request, Response, Firestore, NextFunction) => Promise<void>,
  db: Firestore
) => (req: Request, res: Response, next: NextFunction): Promise<void> =>
  callback(req, res, db, next).catch(next);
