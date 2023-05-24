FROM node:18

WORKDIR /usr/src

COPY ["./package.json", "/usr/src/"]

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["npx","cross-env","nodemon", "./src/bin/www.js"]