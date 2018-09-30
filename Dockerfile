FROM node:8
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install pm2 -g
RUN npm install
COPY . /app
CMD pm2 start bin/www
EXPOSE 3000