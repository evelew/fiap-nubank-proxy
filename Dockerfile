# mongoDB settings
FROM mongo:latest
RUN mongod

# app settings
FROM node:14

WORKDIR /usr/apps/fiap-nubank

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005
CMD ["npm", "run", "start"]