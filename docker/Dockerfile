FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
    sudo \
    curl && \
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    npm install -g webpack

ADD entrypoint /usr/bin/entrypoint

ENTRYPOINT ["entrypoint"]

WORKDIR /root