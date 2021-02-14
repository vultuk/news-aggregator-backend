import { Application } from 'express';
import { Firestore } from '@google-cloud/firestore';
import aggregateSources from '../app/aggregateSources';
import asyncMethod from '../shared/async-method';
import getNewsItem from '../app/getNewsItem';
import listNewsItems from '../app/listNewsItems';

export default (app: Application, db: Firestore): void => {
  // All routes are defined here
  app.get('/news/aggregate', asyncMethod(aggregateSources, db)); // Runs a script to aggregate news articles
  app.get('/news/:id', asyncMethod(getNewsItem, db)); // Shows a single news article
  app.get('/news', asyncMethod(listNewsItems, db)); // Shows all news articles
};
