FROM node:lts-slim

RUN apt update && apt install --yes \
    entr \
    netcat \
    git \
    && rm -rf /var/lib/apt/lists/*

# prepare application folder
RUN mkdir -p /app/src \
    && mkdir -p /app/dist

# prepare application container
WORKDIR /app
# COPY package.json yarn.lock /app/
# RUN yarn install --frozen-lockfile \
#     && yarn cache clean

# COPY entrypoint next.config.js tsconfig.json /app/
ENTRYPOINT ["/app/entrypoint"]

VOLUME [ "/app/src" ]
