FROM node:lts-alpine@sha256:a0b787b0d53feacfa6d606fb555e0dbfebab30573277f1fe25148b05b66fa097 as build
WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install

COPY . .
RUN npm run build

FROM node:lts-alpine@sha256:a0b787b0d53feacfa6d606fb555e0dbfebab30573277f1fe25148b05b66fa097
RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /app

COPY --from=build --chown=node:node /app/package.json ./package.json
COPY --from=build --chown=node:node /app/package-lock.json ./package-lock.json
RUN npm ci --only=production

COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/build ./build
USER node
CMD ["dumb-init", "npm", "run", "start"]
