FROM node:6-slim

RUN npm install -g webpack

ADD entrypoint /usr/bin/entrypoint

ENTRYPOINT ["entrypoint"]

WORKDIR /root