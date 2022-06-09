# syntax=docker/dockerfile:1

FROM node:16.15.1

WORKDIR /app

COPY ["package.json", "package-lock.json",  "./"]

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]