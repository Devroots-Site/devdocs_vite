FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g http-server

RUN cd /app/dist

EXPOSE 3110

CMD ["http-server", "-p", "3110"]
