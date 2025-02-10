FROM node:18.17.1

WORKDIR /usr/app
COPY package*.json ./
COPY ./src ./src
RUN npm ci --omit=dev

CMD npm start