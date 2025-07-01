FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production=true

COPY src ./src
COPY .env.example ./

EXPOSE 3000
CMD ["node", "src/index.js"]
