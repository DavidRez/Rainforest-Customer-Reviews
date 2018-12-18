FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server/proxy.js
EXPOSE 5050