import { Application } from 'express';
import { Firestore } from '@google-cloud/firestore';
import asyncMethod from '../shared/async-method';
import test from '../app/testMethod';

export default (app: Application, db: Firestore): void => {
  app.get('/test', asyncMethod(test, db));
};
