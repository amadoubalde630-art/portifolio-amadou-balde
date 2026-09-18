PROJET FINAL — PORTFOLIO PERSONNEL
Nom : Amadou Baldé
Niveau : Débutant — Semaine 6
Technologies : HTML5, CSS3, JavaScript

1. CONTENU
Le mini-site contient 4 pages :
- index.html : Accueil
- about.html : À propos
- projects.html : Projets
- contact.html : Contact

2. UTILISATION
Ouvrir site/index.html dans un navigateur.
La navigation permet de passer entre les pages.
Le formulaire de contact fonctionne uniquement côté front-end.

3. CONCEPTION
Les dossiers wireframe/prompts et wireframe/exports_stitch contiennent les prompts et le wireframe textuel.
Le fichier wireframe/figma/interactions.txt décrit au moins 6 interactions à reproduire dans Figma.

4. QUALITÉ — RÉSUMÉ
Accessibilité
- Problème : risque de navigation difficile au clavier.
  Correction : lien d’évitement, focus visible et bouton de menu accessible.
  Résultat : navigation clavier améliorée.
- Problème : images sans alternative.
  Correction : attributs alt pertinents.
  Résultat : contenu visuel mieux interprétable.
- Problème : champs de formulaire difficiles à identifier.
  Correction : labels associés avec for/id.
  Résultat : formulaire plus accessible.
- Problème : hiérarchie des titres incohérente.
  Correction : un H1 par page puis H2/H3.
  Résultat : structure plus claire.
Performance / écoconception
- Problème : médias potentiellement trop lourds.
  Correction : illustration SVG légère et dimensions adaptées.
  Résultat : poids réduit.
- Problème : styles dispersés.
  Correction : une feuille css/style.css.
  Résultat : maintenance simplifiée.
- Problème : JavaScript bloquant.
  Correction : script chargé avec defer.
  Résultat : rendu initial non bloqué.
- Problème : animations/effets excessifs.
  Correction : design sobre et prise en compte de prefers-reduced-motion.
  Résultat : interface plus légère.
Robustesse
- Validation des champs vides.
- Vérification du format e-mail.
- Gestion du feedback utilisateur.
- Navigation cohérente entre les pages.
- Responsive avec breakpoints mobile/tablette/desktop.
- Organisation claire des fichiers.

5. TESTS À EFFECTUER
- Console navigateur : aucune erreur JavaScript.
- Responsive : 360x640, 768x1024 et desktop.
- Navigateurs : Chrome/Edge ou Firefox.
- Navigation clavier avec Tab.
- Formulaire : tester champs vides et e-mail incorrect.
