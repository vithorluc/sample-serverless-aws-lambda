FROM node:latest

RUN apk update

WORKDIR /usr/src/

COPY package.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}
