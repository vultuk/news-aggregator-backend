FROM node:15-alpine

WORKDIR /usr/src/app

ENV PORT 3000
ENV HOST 0.0.0.0

COPY . .

RUN npm install

RUN npm run build

RUN npm run minify

CMD npm run start:prod