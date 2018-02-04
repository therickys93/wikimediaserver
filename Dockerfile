FROM alpine
RUN apk update && apk upgrade
RUN apk add nodejs nodejs-npm git
EXPOSE 3000
ADD . /app
WORKDIR /app
VOLUME /mediaserver
RUN npm install
RUN ./node_modules/bower/bin/bower install jquery bootstrap --allow-root
CMD ["npm", "start"]