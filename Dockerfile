FROM node:8
WORKDIR /src

COPY package*.json ./
RUN npm install
COPY . .

CMD npm run prod
