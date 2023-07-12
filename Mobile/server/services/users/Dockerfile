FROM node:18.12.1-alpine

ENV MONGODB=mongodb+srv://damarnagara:YKsJszd5IyMVFYkP@cluster0.jbgojg1.mongodb.net/

ENV NODE_ENV=production

ENV PORT=4001

WORKDIR /users

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]
