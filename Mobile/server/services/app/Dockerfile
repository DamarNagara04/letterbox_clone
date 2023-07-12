FROM node:18.12.1-alpine

ENV DATABASE_URL=postgresql://postgres:Damartimur12@db.kslldtjxrnlbijpimthq.supabase.co:5432/postgres

ENV NODE_ENV=production

ENV PORT=4002

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

