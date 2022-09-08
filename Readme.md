# App Flash Cards

## Data

### Card Table

| Field | Type |
| --- | --- |
| id | uuid |
| CreatedBy | UseId |
| CreatedAt | Date |
| UpdateAt | Date |
| Question | Text |
| Answer | Text |
| Level | number (enum) |
| Theme | Array(string) |

### Table User

| Field | Type |
| --- | --- |
| id | uuid |
| Email | email |
| pasword | password |

### Table Relation Card User Level

| Field | Type |
| --- | --- |
| id | uuid |
| User | id |
| Card | id |
| Level | number |
| LastCheck | number |

### Repetition rate

| Score | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Number of Days | 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 |

## Notes

### Gestion des cartes

Une carte créé est ajoutée a tous les joueurs automatiquement

L’utilisateur peut ensuite décider de la supprimer s’il ne veut plus l’avoir.

L’utilisateur peut ajouter une carte qu’il avait supprimé

### Gestion de la récurance/apparition des cartes

Les cartes nous sont proposées en suivant le repetition rate.

A chaque fois qu’on répond a une question, on se donne un niveau de memorisation

## Fonctionnement Front End

### Jeu

- L’utilisateur peux spécifier un theme
- On affiche le nombre de questions proposées (Resultat du taux de répétition)
- On pose une question de ce tableau au hazard
- Quand on pose une question on la supprime du tableau

### 2 Joueurs (V2)

- Chaque joueur a un tableau de questions
- le joueur qui répond a la question voit la question
- Le joueur qui pose la question peut voir la réponse (et l’aider)

### Création de carte

- le joueur ajoute une quesiton
- le joueur ajoute une reponse
- le joueur ajoute un/des themes
- Possibilité d’enregistrer une Question ou un réponse en Markdown
    
    Decide like this:
    
    1. Store the original data (text with markdown).
    2. Generate the derived data (HTML and plaintext) on the fly.
    3. *Measure* the performance:
        - If it's acceptable, you're done, woohoo!
        - If not, *cache* the derived data.
    
    Caching can be done in many ways... you can generate the derived data
     immediately, and store it in the database, or you can initially store 
    NULLs and do the generation *lazily* (when and *if* it's needed). You can even cache it outside the database.
    
    But whatever you do, make sure the cache is never "stale" - i.e. when
     the original data changes, the derived data in the cache must be 
    re-generated or at least marked as "dirty" somehow. One way to do that 
    is via triggers.
    

## Idées de Cartes

[Idées de Carte](https://www.notion.so/Id-es-de-Carte-04a8224a18ad416d9d272ed646e90ecd)

[Inspiration](https://www.notion.so/Inspiration-eb8d2606e5c84a29873d165b2cf8db52)

### Idées Web3

- On gagne des récompenses sous forme de NFTs
- On peut ehanger ces récompense pour ?
- Ces récompenses nous donnent le droit de ?
-
