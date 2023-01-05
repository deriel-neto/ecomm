FROM node:16
WORKDIR  /app-node/account
COPY  package*.json .
RUN npm install
COPY . .
ENTRYPOINT npm start 