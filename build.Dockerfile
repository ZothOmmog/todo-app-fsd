# syntax=docker/dockerfile:1

FROM node:16.15.1 as build-stage

ARG install_args

WORKDIR /app

COPY ["package.json", "package-lock.json",  "./"]

RUN npm install $install_args

FROM scratch as copy-stage

COPY --from=build-stage /app/node_modules node_modules
COPY --from=build-stage /app/package.json package.json
COPY --from=build-stage /app/package-lock.json package-lock.json