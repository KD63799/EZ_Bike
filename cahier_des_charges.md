# Créer une application web pour localiser des stations de vélos électriques HTML / CSS / JavaScript

## tag: `FIGMA` `Wireframe` `HTML` `CSS` `VanillaJS`

En tant que développeur web, la mairie de Marseille souhaite mettre en place une application pratique et conviviale qui permettra aux habitants de la ville de localiser rapidement des stations de vélos en libre service. L'application doit fournir des informations en temps réel sur la disponibilité des vélibs.

## Introduction

Vous allez intégrer une équipe de 5 personnes pour le projet. Organisez un tableau de gestion de projet (par ex. Trello) et travaillez de manière agile, répartissez vous les tâches et gérer le temps nécessaire pour les différentes tâches du projet.

Des exemples de projet similaire vous seront fournis.

## Maquette Graphique et Prototype

Vous allez créer un Wireframe et / ou une maquette graphique et le prototype de l'application web "EZ-BIKE". Un site Web de 6 pages minimum.

- Les pages à inclure dans la maquette sont les suivantes :

  - Accueil
  - Mode d'emploi
  - Calculateur (formulaire de caclul d'émission de CO2)
  - Trouver un velib
  - Contact
  - Une page 404
  - une page Coming Soon

- Utiliser Figma pour réaliser la maquette et prévoir les deux déclinaisons d'écran suivantes :

  - Desktop : 1920x1080 Mobile
  - Android Large : 360x800

## Développement frontend

Développer la partie front-end de l'application web "EZ-BIKE", pour réaliser cette tâche, vous devez suivre les étapes suivantes :

Intégrer la maquette graphique réalisée précédemment en utilisant des balises sémantiques HTML5 et en favorisant les noms de classes en anglais selon la méthodologie BEM.

- Assurer la responsive design de l'application en vous basant sur les dimensions suivantes pour chaque support :

  - Desktop: 1920x1080
  - Notebook: 1366x768
  - Mobile: 360x800
  - Tablette: 768x1024

- Implémenter les fonctionnalités JavaScript suivantes :

  - Barre de navigation en mobile avec un menu burger.
  - Slide Show (Carousel) sur mobile pour la page "Mode d'emploi".
  - Un compte a rebours sur la page "Trouver un velib" pour patienter en attendant le développement de la fonctionnalité.
  - un calcul d'émission de CO2 pour les trajets en voiture sur la page "Calculateur".

    Le calcul doit prendre en compte la **distance en km** effectuée par l'utilisateur avec un véhicule chaque semaine sur un trajet domicile-travail, avec un facteur d'émission moyen pour une voiture essence de **0.12 kg CO2/km**.

### Notes

- S'assurer que les pages sont accessibles via un menu de navigation.
- Valider les pages pour être conforme conformes au W3C.
- Prêter une attention particulière à l'accessibilité et à l'éco-conception.
- Versionner le projet avec git et GitHub
- Ajouter un fichier `.gitignore`

Vous pouvez ajouter d'autres fonctionnalités, si vous le souhaitez.

## Développement de la page Trouver un Vélib

La page Trouver un Vélib doit permettre à l'utilisateur de trouver un de localiser des des stations Vélib (à marseille) et de renseigner les éléments suivants:

- L'adresse de la station
- Le nombre de vélos électriques restant
- Implémenter les fonctionnalités JavaScript suivantes :

  - Utiliser Leaflet, une bibliothèque JavaScript open-source très populaire pour créer des cartes interactives sur des sites web. <https://leafletjs.com>
  - Utiliser fetch en JavaScript pour créer une requête HTTP et obtenir des informations sur les stations Vélib.

Le projet doit être réalisé dans un délai de `_____________________`.

## Deadline

A déterminer

`_________________`

## Livrable

- Un dossier zippé contenant:

  - La maquette graphique et le prototype de l'application au format `.fig` et le lien vers ce dernier
  - Le dossier du site avec tous les fichiers de l'application (HTML, CSS et JavaScript).

- Le projet devra être versionné avec git et inclure un fichier README.md contenant:

  - Les instructions pour lancer le projet en local
  - le lien des différentes ressources utilisées
  - Le nom des contributeurs du projet et les tâches à effectuer par chaque contributeur.

- Le projet devra être déployé et publié à l'aide de Vercel

## Ressources

### Liens utiles

- Video de démonstration: <https://drive.google.com/file/d/1vkKJFzflldTT_Q2FBoqdVJYJ-YXHheed/view>
- leaflet : <https://leafletjs.com>
- Vercel : <https://vercel.com>>

### Site Levélo

<https://levelo.ampmetropole.fr/sharing>

### Liens API

<https://transport.data.gouv.fr/resources/80604>

<https://transport.data.gouv.fr/datasets/velos-a-assistance-electrique-en-libre-service-levelo-sur-marseille>
