FROM node:lts-alpine AS builder

ENV NODE_ENV=build
WORKDIR /app

COPY package*.json ./
COPY quasar.config.* ./
COPY index.html ./

RUN npm install

COPY . .

RUN npm run build:ssr

FROM node:lts-alpine AS runner

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

ENV NODE_ENV=production
ENV PORT=4000

COPY --from=builder /app/package*.json ./

RUN npm install --production --ignore-scripts

COPY --from=builder --chown=appuser:appgroup /app/dist/ssr ./dist/ssr

USER appuser

EXPOSE 4000

CMD ["node", "dist/ssr/index.js"]