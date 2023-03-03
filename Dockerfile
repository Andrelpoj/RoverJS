FROM node:18 as first

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

ENTRYPOINT ["node", "build/index.js"]