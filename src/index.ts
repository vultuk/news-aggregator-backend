import express, { Application } from 'express';

import { Firestore } from '@google-cloud/firestore';
import Routes from './routes';
import errorHandling from './shared/errorHandling';
import middleware from './shared/middleware';

const db: Firestore = new Firestore(
  process.env.APP_NAME_STAGING
    ? {
        projectId: process.env.APP_NAME_STAGING,
      }
    : undefined
);
const port = process.env.PORT || 8080;

// Create an Express instance
const app: Application = express();

middleware(app);

// Set up appropriate routes
Routes(app, db);

// Add any middleware
errorHandling(app);

// Listen on the appropriate port
app.listen(port, () => {
  app._router.stack
    .filter((r) => r.route)
    .forEach((r) => {
      console.info(
        `Mapped Route [${r.route.stack[0].method.toUpperCase()}] ${
          r.route.path
        }`
      );
    });

  console.log(`\nServer running on port ${port}`);
});
