
## Violations des Principes SOLID

### Single Responsibility Principle (SRP)
- La classe `Character` gère à la fois la validation des données, la gestion de l'inventaire et l'affichage
- La classe `Game` gère l'interface utilisateur et la logique de création de personnage
- Les classes de personnage (`Guerrier`, `Mage`, `Voleur`) ne respectent pas le SRP car elles héritent de `Character` sans ajouter de comportement spécifique

### Open/Closed Principle (OCP)
- Le code n'est pas ouvert à l'extension pour de nouvelles classes de personnage sans modification
- La structure actuelle nécessite de modifier le code existant pour ajouter de nouvelles classes
- Le switch dans `game.js` viole l'OCP car il nécessite une modification pour chaque nouvelle classe

### Liskov Substitution Principle (LSP)
- Les classes dérivées (`Guerrier`, `Mage`, `Voleur`) ne respectent pas le LSP car elles ne peuvent pas être substituées à la classe de base sans affecter le comportement du programme
- L'héritage est utilisé de manière incorrecte car il n'y a pas de polymorphisme réel

### Interface Segregation Principle (ISP)
- La classe `Character` force toutes les classes dérivées à implémenter des méthodes qu'elles n'utilisent pas
- Il n'y a pas de séparation claire des interfaces pour différents types de comportements

### Dependency Inversion Principle (DIP)
- Les classes dépendent directement de l'implémentation des statistiques plutôt que d'une abstraction
- La classe `Game` dépend directement des classes concrètes plutôt que d'interfaces abstraites

## Autres Points Importants

### Architecture
- Absence de séparation claire entre la couche présentation et la logique métier
- Manque d'utilisation de patterns de conception appropriés
- Absence de gestion des erreurs robuste

### Bonnes Pratiques
- Les constantes sont codées en dur dans le code
- Manque de validation des données pour les statistiques
- Les tests sont présents mais ne couvrent pas tous les cas d'utilisation

### Sécurité
- Les entrées utilisateur ne sont pas correctement sanitizées
- Absence de validation des données pour les statistiques des personnages

### Maintenabilité
- Le code est difficilement extensible
- Les responsabilités ne sont pas clairement séparées
- Manque de modularité dans la structure du code 
