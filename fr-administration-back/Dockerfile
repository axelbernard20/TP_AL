FROM node:16-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache --virtual .gyp python3 make g++

COPY package*.json ./

RUN npm install
RUN npm i bcrypt
RUN npm i -D @types/bcrypt

COPY . .

RUN npm run build

RUN apk del .gyp

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

