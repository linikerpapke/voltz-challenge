FROM node:alpine

WORKDIR /usr/src/api

COPY . .

COPY ./.env ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]