1- Créer le module pour l'authentification
    ng generate module auth

2- Créer le module principal de notre application
    ng generate module main

3- Créer le composant main et specifier le module correspondant pour qu'ils soient dans le meme repertoire
    ng generate component main --module=main

4- Créer le composant auth et specifier le module correspondant pour qu'ils soient dans le meme repertoire
    ng generate component auth --module=auth
5- Enregistrer nos modules dans le module principale app.module.ts

6- Routing

7- Créer les composant movie-list, movie-details et movie-form dans le repertoire main
