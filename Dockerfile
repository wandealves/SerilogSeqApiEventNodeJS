FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y wget

RUN [ -e "node_modules" ] || npm install

COPY . .

ENV SEQ_URL=http://seq

EXPOSE 3000

CMD ["node", "server.js"]