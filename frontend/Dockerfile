FROM node:18 AS build

WORKDIR /usr/app/
COPY package*.json ./
COPY ./src ./src
COPY ./public ./public
COPY .env ./
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /usr/app/build /usr/share/nginx/html
EXPOSE 80

CMD nginx -g "daemon off;"