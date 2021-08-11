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
8- Movie List
9- Créer un service pour communiquer avec l'api django
   ng generate service api
   injecter notre ApiService dans main.module.ts
   initialiser ApiService dans le construtor de MovieListComponent

10- Créer une fonction getServices dans ApiService  qui retourne private movies
    dans ngOnInit de movie-list-component.ts appeler getServices() dans MovieListComponent
    comme ceci:
      ngOnInit(): void {
        this.movies = this.apiService.getService()
      }

11- Fetching Data from API
    Créer notre BaseUrl dans api.service.ts
    baseUrl = 'http://127.0.0.1:8000/api/movies/';

    importer HttpClient
    initialiser HttpClient dans le constructor

    importer HttpClientModule dans app.module.ts
