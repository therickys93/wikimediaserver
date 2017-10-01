FROM alpine
RUN apk update && apk upgrade
RUN apk add nodejs nodejs-npm
EXPOSE 3000
ADD . /app
WORKDIR /app
RUN mkdir /mediaserver
VOLUME /mediaserver
RUN npm install
CMD ["npm", "start"]