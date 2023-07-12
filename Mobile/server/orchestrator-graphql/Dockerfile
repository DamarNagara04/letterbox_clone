FROM node:18.12.1-alpine

ENV NODE_ENV=production

ENV REDISLAB_URL=redis://default:buaeZ5XHET3dpVvAhsDbGbFT3Lv4JMIN@redis-18675.c299.asia-northeast1-1.gce.cloud.redislabs.com:18675

ENV APP_FIRST_SERVER_URL=http://localhost:4002

ENV USER_SECOND_SERVER_URL=http://localhost:4001

ENV PORT=4000

WORKDIR /orchestrator-graphql

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "start"]