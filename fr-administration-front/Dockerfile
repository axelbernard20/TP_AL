# Étape de build
FROM node:18-alpine as build

# Définir le répertoire de travail dans l'image
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json /app/

# Installer les dépendances de l'application
RUN npm install

# Copier les fichiers du projet dans l'image
COPY . /app

# Construire l'application pour la production
RUN npm run build

# Étape de serveur
FROM nginx:alpine

# Copier les fichiers statiques de build dans le dossier de Nginx
COPY --from=build /app/dist/fr-administration-front/browser /usr/share/nginx/html

# Exposer le port pour Nginx
EXPOSE 80

# Lancer Nginx en mode foreground
CMD ["nginx", "-g", "daemon off;"]
