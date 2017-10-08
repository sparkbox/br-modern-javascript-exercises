FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
    sudo \
    curl && \
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    npm install -g webpack

ADD npm-deps /opt/npm-deps

RUN cd /opt/npm-deps/webpack && npm install && cd /opt/npm-deps/skills && npm install

ADD entrypoint /usr/bin/entrypoint

ENTRYPOINT ["entrypoint"]

WORKDIR /root