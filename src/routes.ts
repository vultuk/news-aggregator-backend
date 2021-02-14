import { Application } from 'express';
import { Firestore } from '@google-cloud/firestore';
import testRoutes from './routes/test.routes';

export default (app: Application, db: Firestore): void => {
  // All routing files are placed here
  testRoutes(app, db);
};
