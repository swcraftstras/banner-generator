# Générateur de bannière pour le meetup Software Craft Strasbourg

[Utiliser en live](https://banner.strasbourg-craft.fr) (le site est déployé automatiquement via Github Pages)

- Vanilla JS (sans framework)
- Javascript modules
- Pas de build
- Les dépendances sont présentes dans dans [public/lib/vendor](lib/vendor) accompagnées de leurs sources, license et URL d'origine

## Fonctionnalités

- Aperçu de bannière
- Export de la bannière en PNG
- Mise à jour automatique
- Persitance via Localstorage (les modifications sont conservées même quand la page est rafraichie)
- Offline first : une fois chargée, l'application fonctionne hors-ligne
- Manifeste PWA : permet d'installer l'application ou d'en faire un raccourci sur smartphone

## Philosophie

Faire un outil simple, et résilient.

Simple : 
- fait peu de choses et les fait bien
- si des fonctionnalités de confort compliquent trop l'outil on préférera ne pas les faire
- je l'espère relativement facile à comprendre
- nécessite peu d'outillage (éditeur de code, serveur web)

Résilient :
- pas de build, donc pas de surface d'attaque (supply chain attack)
- s'appuie essentiellement sur des API présentes dans le navigateur (pas de mise à jour de framework)
- baseline HTML/CSS la plus basse possible pour tourner sur des terminaux plutôt anciens

## Exécuter localement

```shell
npx vite preview --outDir .
```

## Compatibilité navigateur : baseline 2018

Baseline 2006

- [CSS 2.1 attribute selector](https://caniuse.com/css-sel2)

Baseline 2013

- [CSS child combinator `A > B`](https://caniuse.com/mdn-css_selectors_child)

Baseline 2015

- [canvas](https://caniuse.com/canvas)
- [CSS flexbox](https://caniuse.com/flexbox)

Baseline 2017

- [gap](https://caniuse.com/mdn-css_properties_gap)
- [CSS variables (custom properties)](https://caniuse.com/css-variables)

Baseline 2018

- [es6 Script modules](https://caniuse.com/es6-module)
