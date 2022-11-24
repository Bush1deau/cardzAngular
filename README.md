# TP2 - CARDZ

## Introduction

Vous faites partis d'une start-up fraichement créée lors d'une soirée un peu (trop) arrosée.

Pour votre première mission, ce n'est pas le coiffeur du coin qui vous a demandé de créer une application...
Ni même la mère de votre pote qui veut que vous lui fassiez une todo list... Non!
C'est un représentant d’Instagram qui vous a contacté, rien que ça! (Et oui, comme quoi vous n'étiez pas les seuls à avoir picolé ce soir là...)

Le représentant d'Instagram vous a bien expliqué la situation:

Quand vous êtes sur Instagram et que vous éditez votre profil, vous ne pouvez mettre qu’un seul lien vers un site web. 
 

![image](https://user-images.githubusercontent.com/24430288/203858207-3ed8ea7e-d2b3-4dfd-b475-22135ff89c62.png)


Ce lien apparait sur le profil des personnes comme ceci :

![image](https://user-images.githubusercontent.com/24430288/203858237-1c0ad2b6-21c1-4efa-b5d9-251ea42638ad.png)
 
(Oui c’est mon vrai compte et alors ?)

Le problème c’est que les utilisateurs aimeraient pouvoir y ajouter plusieurs sites afin d’y afficher les liens vers leurs réseaux sociaux, leurs channels youtube etc…
Cependant, les développeurs d’Instagram disent que ce n’est pas possible, ils n’ont pas les compétences en interne pour pouvoir ajouter ces liens.
Des concurrents ont déjà mis en place des solutions sur le marché. Ils créent une application où l’utilisateur a la possibilité de créer et personnaliser une page web. Voici certains de ces concurrents gratuits et payants :

![image](https://user-images.githubusercontent.com/24430288/203858255-acd09d3b-8635-46ef-ad34-69acd4429bf4.png)
https://linktr.ee/

![image](https://user-images.githubusercontent.com/24430288/203858266-425a433b-cc6b-4c8a-b199-5c561b60cc2d.png)
https://carrd.co/

Le représentant d’Instagram vous demande donc de lui créer une application permettant d’écraser ces concurrents. Il vous donne juste un peu de HTML et CSS pour commencer votre projet.
- Clonez le projet : https://github.com/Evyweb/cardz

## Votre mission…

Dans un premier temps, il souhaiterait que vous utilisez un viewModel et que vous:
-	Rendiez dynamique les informations de l’utilisateur comme le nom et la biographie.
-	Rendiez dynamique l’image de fond et la photo de l’utilisateur
-	Rendiez dynamique les liens à afficher ainsi que leurs icônes
-	Rendiez dynamique l’animation de l’image de fond
-	Rendiez dynamique l’animation de la cardz
-	Rendiez dynamique le changement de couleur de fond de la partie supérieure (bonus)
-	Rendiez dynamique le changement de couleur de fond de la partie inférieure (bonus)
-	Rendiez dynamique les couleurs de texte et du titre (bonus)
-	Rendiez dynamique les polices utilisées (bonus)
Dans un second temps, vous devrez :
-	Sans toucher à votre viewModel, vous devrez découper votre application plusieurs composants en leur passant les données en input

Plus tard nous verrons comment :
-	Envoyer les données de votre viewModel à partir d’un service
-	Ajouter un faux serveur http qui enverra les données
-	Appeler le faux serveur http pour récupérer les données grâce au httpClient d’Angular
-	Créer une route /cardz/ :id/view permettant d’afficher la cardz d’un user à partir de son id
-	Créer une route /cardz/ :id/edit permettant d’ajouter une vraie page de customisation des éléments vus dans la première partie.

Dernier mot du représentant d’Instagram : « Bon courage à tous et rendez-nous encore plus riche ! » 
