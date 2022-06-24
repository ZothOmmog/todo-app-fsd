# syntax=docker/dockerfile:1

FROM node:16.15.1

WORKDIR /app

EXPOSE 3000

CMD npm run start || npm install && npm run start