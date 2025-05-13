Auteur : TOTSKYI Hlib

Thème de la collection : Versailles et ses dimensions politiques, diplomatiques, touristiques

Structure du projet :

- index.xhtml : page d’accueil contenant une présentation du site, images, liens de navigation

- Content/
  - Collection/ :
    * diplomatie.xhtml
    * politique.xhtml
    * tourisme.xhtml
  - Forms/ :
    * fiche_form.xhtml — formulaire pour la création de fiche
    * livreor.xhtml — livre d’or permettant aux visiteurs de laisser un message
  - Miscellaneous/ :
    * authors.xhtml — portrait chinois d'auteur
    * sources.xhtml — références des images, textes, documentation et IA
    * autoeval.xhtml — tableau d’autoévaluation dynamique
    * generated_from_xml.xhtml — fiche générée via transformation XSLT

- Code/
  - Javascript/ :
    * autoeval.js — logique de mise à jour du tableau d’autoévaluation
    * livreor.js — gestion dynamique du formulaire livre d’or
    * script1.js — script pour le style alternatif
  - Typescript/ :
    * tsconfig.json — configuration TypeScript
    * fichiers sources TypeScript (.ts)

- Styles/ :
    * style2.css — style alternatif pour malvoyants
    * style.css — style principal du index.xhtml
    * autoeval.css — styles pour autoeval.xhtml
    * styles.xhtml — présentation des sélecteurs CSS utilisés

- style.css et style2.css partagent des règles communes (via imports ou duplication minimale)
- style2.css utilise des niveaux de gris pour l’accessibilité


- XML/ :
    * vers.dtd — description de la structure de fiche vers.xml
    * vers.xml — fichiers XML représentant index.xhtml
    * arbre.svg — arbres XML (structure des éléments)
    * vers.xsl — transformation XSLT XML → HTML

- Images/ :
    * Toutes les images utilisées dans le site

Détails techniques :

- Toutes les pages HTML passent la validation via https://validator.w3.org/nu/
- Scripts en TypeScript, compilés en JavaScript
- Date et heure affichées dynamiquement
- Lien aléatoire vers une fiche depuis l’accueil
- Formulaires dynamiques avec :
    * vérification en direct
    * champ caché userAgent
    * bouton d’affichage de récapitulatif
- autoeval.xhtml :
    * Moyenne dynamique des curseurs
    * Code couleur des labels
    * Affichage dynamique de pourcentages
