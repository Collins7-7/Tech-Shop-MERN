FROM node:lts-alpine

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
WORKDIR /app

COPY package*.json ./


COPY client/package*.json client/
RUN npm run install-client --omit=dev


COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY client/ client/ 

COPY server/ server/

USER node

CMD ["npm", "run", "shop"]


EXPOSE 5000