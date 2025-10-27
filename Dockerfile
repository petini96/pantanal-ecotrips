#
# STAGE 1: Build
#
# Imagem base com Node.js LTS (Node 20), como você especificou.
FROM node:lts-alpine AS build-stage

WORKDIR /app

# Copia os package.json e package-lock.json primeiro
COPY package*.json ./

# Instala TODAS as dependências (incluindo devDependencies) para o build
RUN npm install

# Copia o restante do código-fonte
COPY . .

# *** A MUDANÇA PRINCIPAL ***
# Roda o build específico para SSR
RUN npm run build:ssr

#
# STAGE 2: Production
#
# Começa de uma imagem limpa do Node.js LTS
FROM node:lts-alpine AS production-stage

WORKDIR /app

# Copia os package.json e package-lock.json
COPY package*.json ./

# Instala APENAS as dependências de produção
# Isso cria uma imagem muito menor e mais segura
RUN npm install

# Copia o servidor SSR buildado do "build-stage"
# Nós copiamos a pasta inteira do 'dist/ssr'
COPY --from=build-stage /app/dist/ssr ./dist/ssr

# O servidor SSR do Quasar escuta a variável de ambiente PORT
# Definimos como 4000 para bater com o seu docker-compose.yml
ENV PORT=4000

# Expõe a porta que o servidor vai rodar
EXPOSE 4000

# *** O NOVO COMANDO ***
# Este é o comando para iniciar o servidor SSR de produção
CMD ["node", "dist/ssr/index.js"]
