FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY build  scripts
COPY scripts/assets scripts/assets

CMD [ "npm", "run", "start-prod" ]