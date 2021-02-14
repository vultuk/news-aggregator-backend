import { Application } from 'express';
import { Firestore } from '@google-cloud/firestore';
import newsRoutes from './routes/news.routes';

export default (app: Application, db: Firestore): void => {
  // All routing files are placed here
  newsRoutes(app, db);
};
