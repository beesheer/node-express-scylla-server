FROM node:8
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD pm2 start app.js
EXPOSE 3000