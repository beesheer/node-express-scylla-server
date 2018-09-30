FROM keymetrics/pm2:latest-alpine

# Bundle APP files
WORKDIR /app
COPY package.json /app
COPY ecosystem.config.js /app

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
COPY . /app

# Expose the listening port of your app
EXPOSE 3000

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]