# Starter Kit

Un starter kit pour démarrer rapidement avec des applications SaaS modernes en utilisant React, Vite, TypeScript, TailwindCSS, Firebase, Zustand... Ce kit est conçu pour vous fournir une base solide et extensible pour vos projets.
Ce kit fournit une base solide pour démarrer un projet avec les fonctionnalités essentielles d'authentification et une interface utilisateur prête à l'emploi.

## Table des matières

- [Introduction](#introduction)
- [Technologies Utilisées](#technologies-utilisées)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration Initiale](#configuration-initiale)
- [Renommage du fichier .env.example](#renommage-du-fichier-envexample)
- [Lancer le Projet](#lancer-le-projet)

## Introduction

Ce starter kit est un modèle prêt à l'emploi pour créer des applications SaaS avec une configuration moderne. Il intègre les meilleures pratiques de développement avec des outils et des technologies éprouvées pour une expérience de développement fluide.

## Technologies Utilisées

- **[Vite](https://vitejs.dev/)** : Outil de bundling rapide pour le développement.
- **[React](https://reactjs.org/)** : Bibliothèque pour construire l'interface utilisateur.
- **[TypeScript](https://www.typescriptlang.org/)** : Superset de JavaScript avec typage statique.
- **[TailwindCSS](https://tailwindcss.com/)** : Framework CSS utilitaire pour une conception rapide et flexible.
- **[Firebase](https://firebase.google.com/)** : Services backend pour l'authentification, le stockage.
- **[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)** : Gestion d'état global simple et flexible.
- **[ESLint](https://eslint.org/)** : Outil pour maintenir la qualité du code.

## Fonctionnalités

- **Inscription** : Les utilisateurs peuvent créer un compte avec une adresse e-mail et un mot de passe.
- **Connexion** : Les utilisateurs peuvent se connecter avec leurs identifiants.
- **Tableau de bord** : Une page protégée pour les utilisateurs connectés, accessible après l'authentification.
- **Déconnexion** : Les utilisateurs peuvent se déconnecter de leur compte.

## Installation

Pour créer un nouveau projet basé sur ce starter kit, utilisez la commande suivante :

```bash
npx micro-saas-vite-kit my-app
cd my-app
npm install
```

## Configuration initiale

- **Ajout du fichier .gitignore**

Pour éviter d’inclure des fichiers et des dossiers indésirables dans votre dépôt Git, vous devez ajouter un fichier .gitignore à la racine de votre projet. Voici un exemple de contenu pour le fichier .gitignore :

```bash
node_modules
dist
dist-ssr
*.local
.env
```

## Renommage du fichier .env.exemple

Le fichier .env.exemple contient des variables d’environnement nécessaires à la configuration de votre application, notamment pour Firebase. Pour utiliser ces variables, vous devez renommer ce fichier en .env et remplir les valeurs appropriées:

```bash
VITE_REACT_APP_API_KEY=your_api_key
VITE_REACT_APP_AUTH_DOMAIN=your_auth_domain
VITE_REACT_APP_DATABASE_URL=your_database_url
VITE_REACT_APP_PROJECT_ID=your_project_id
VITE_REACT_APP_STORAGE_BUCKET=your_storage_bucket
VITE_REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_REACT_APP_APP_ID=your_app_id
VITE_REACT_APP_MEASUREMENT_ID=your_measurement_id
```

## Lancer le Projet

Votre projet est maintenant prêt à être utilisé. Vous pouvez démarrer le serveur de développement avec la commande suivante :

```bash
npm run dev
```

## Auteur

Ce projet est maintenu par **BriiceR**.

## Dépôt Git

Pour plus d'informations, consulter le dépôt GitHub du projet : [micro-saas-vite-kit](https://github.com/BriiceR/micro-saas-vite-kit)
