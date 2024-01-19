# Utiliser l'image Node.js officielle comme base
FROM node:16-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Installer les outils nécessaires pour compiler les dépendances natives
RUN apk add --no-cache --virtual .gyp python3 make g++

# Copier les fichiers de définition des dépendances
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install
RUN npm i bcrypt
RUN npm i -D @types/bcrypt

# Copier les fichiers du projet dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Nettoyer les outils de compilation pour alléger l'image
RUN apk del .gyp

# Exposer le port sur lequel l'API va écouter
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["npm", "run", "start:prod"]

