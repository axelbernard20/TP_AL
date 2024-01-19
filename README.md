# Front-end de l'Administration

Ce projet représente le front-end de l'application d'administration. Il a été développé avec Angular.

## Lancement du Projet

Pour lancer le projet, suivez ces étapes :
1. Naviguez vers le répertoire `fr-administration-front`.
2. Exécutez la commande suivante : 
   ```
   ng serve --open
   ```

## Connexion

Pour vous connecter, vous devez être un utilisateur enregistré dans la base de données.

Si vous n'avez pas encore de compte, vous pouvez en créer un en utilisant la commande cURL suivante (le back doit être allumé) :
```
curl -X POST -H "Content-Type: application/json" -d '{"lastname": "Nom", "firstname": "Prenom", "age": 30, "password": "Password"}' http://localhost:3000/users
```

## Structure du Projet

Dans le dossier `src`, vous trouverez un dossier `app` qui contient les éléments suivants :
- `association-creator`
- `association-detail`
- `associations-list`
- `guards`
- `interceptors`
- `login`
- `nav`
- `profil`
- `recherches`
- `services`
- `update`
- `user-creator`
- `user-delete`
- `user-detail`

Ainsi que tous les fichiers app.
