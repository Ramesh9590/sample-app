FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
CMD [ "node", "index.js" ]
EXPOSE 8080
