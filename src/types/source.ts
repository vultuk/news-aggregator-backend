import Article from './article';

type Source<T = unknown> = {
  name: string; // The name of the news source
  identifier: string; // A unique code so we can reference this source
  aggregate: (lastCollectedId: string) => Promise<T>; // A function used to collect the news
  parse: (item: T) => Article[]; // A function used to turn the collected news into an article
};

export default Source;
