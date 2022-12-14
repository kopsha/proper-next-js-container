FROM node:lts-slim

RUN apt update && apt install --yes \
    netcat \
    git \
    && rm -rf /var/lib/apt/lists/*

# prepare application folder
RUN mkdir -p /app/src \
    && mkdir -p /app/dist

# prepare application container
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile \
    && yarn cache clean

COPY entrypoint next.config.js jsconfig.json .eslintrc.json /app/
ENTRYPOINT [ "/app/entrypoint" ]

VOLUME [ "/app/src" ]
VOLUME [ "/app/dist" ]

ENV NODE_ENV=production
CMD [ "start" ]

EXPOSE 3000
