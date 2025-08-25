# POO – Les fondamentaux

## Analogie

Imaginez une classe comme un **moule à gaufres**.

Le moule (`class`) définit la forme et la structure de toutes les gaufres
que vous allez préparer.  
Chaque gaufre que vous sortez du moule est un objet unique (une **instance**),
mais toutes partagent la même structure de base définie par le moule.

## Concepts clés

- **Classe** : le modèle (le moule)  
  → définit les propriétés et les comportements d'un objet.

  - propriété = représente une caractéristique (une donnée) d'un objet → `attributs`
  - comportement = fonction qui décrit ce que l'objet peut faire → `méthode`

  > - **propriétés** = ce que l'objet **a**  
  > - **comportements** = ce que l'objet **fait**

- **Instance** : l'objet concret créé à partir de la classe (la gaufre)  
  → syntaxe `const obj = new MyClass();`

- **Constructeur** : méthode spéciale automatiquement appelée lors de l'instanciation
  (la louche)  
  → il reçoit des **paramètres** (pâte à gaufre, pâte à gaufre au chocolat)
  et **initialise les propriétés**

- **`this`** : désigne l'instance, l'objet courant, celui qu'on est en train de
  créer ou d'utiliser → permet d'accéder aux données de l'objet

### Démonstration

1. Ajouter un fichier `sandbox/classes/Character.js`.
2. Déclarer la classe :

   on commence avec le constructeur et on initialise les propriétés

    ```js
    class Character {
      // constructeur
      constructor(name, health, level = 1) {
        this.name = name; // propriété
        this.health = health;
        this.level = level;
      }
    }
    ```

3. Instancier :

    ```js
    // on crée autant d'objets que nécessaire avec le même « moule »
    const hero = new Character('Link', 100, 3); // `hero` est une instance
    const monster = new Character('Ganon', 60); // paramètre par défaut

    console.log(hero); // affiche l'objet crée avec ses propriétés (attributs)
    console.log(monster);
    console.log(monster.level); // affiche `1`
    ```

4. Modifier une propriété :

    ```js
    // on peut modifier une propriété (c'est un objet) !
    monster.health = 30;
    console.log(monster.health);
    ```

5. Ajouter des méthodes :

    ```js
    // méthode → ce ue l'objet peut faire (= comportement)
    attack(target) {
      console.log(`${this.name} attacks ${target.name}!`);
      const damage = this.level * 5;

      // target est une instance de Character, on accède à ses méthodes
      target.takeDamage(damage);
    }

    takeDamage(damage) {
      this.health -= damage;
      console.log(`${this.name} takes ${damage} damage. ${this.health} HP left.`);
      if (this.health <= 0) {
        console.log(`${this.name} is dead!`);
      }
    }
    ```

    appel :

    ```js
    // on lance une action = on appel une méthode
    hero.attack(monster);
    hero.attack(monster);
    ```

### Exercice

**Consigne** : Créez une classe `User` dans un fichier `./sandbox/classes/User.js`.  
Elle devra avoir un `constructor` qui initialise les attributs
`id`, `firstName`, `lastName` et `age`.  
Ajouter une méthode `introduce` qui affiche en console
« je m'appelle Dave Lopper et j'ai 42 ans »

> ne pas oublier d'instancier !

## Encapsulation et Contrôle

### Problème

Reprenons notre `monster` :
que se passe-t-il si quelqu'un écrit `monster.health = -50;` ?  
C'est absurde, les points de vie ne peuvent pas être négatifs !

Actuellement, rien ne nous protège de ce genre d'erreur.

### Solution

On va protéger les données internes d'un objet en les rendant **inaccessibles**
directement depuis l'extérieur et ne permettre leur **modification**
que de manière **contrôlée**.

C'est le principe de l'**encapsulation**.

### Objectifs

- **contrôle** de l'accès : on décide ce qu'un utilisateur peut faire avec la donnée
- **protection** des données internes : champs privés inaccessibles depuis l'extérieur
- **ABSTRACTION** : on masque les détails de l'implémentation  
  → l'utilisateur interagit sans savoir comment ça fonctionne en interne
- **traitement automatique** : on pourra déclencher une action automatique lors de
  l'accès ou de la modification (ex : on hache automatiquement le mot de passe)
- **validation** et logique métier
  (ex: le nom ne peut pas être vide, la santé ne peut pas être négative…)


### Démonstration : attributs privés et Getters/Setters

Modifiez la classe `Character`.

#### Attributs privés

(Depuis ES2022) on utilise un croisillon `#` devant le nom de l'attribut pour le rendre privé. Il ne sera accessible qu'à l'intérieur de la classe elle-même.

```js
class Character {
  // On déclare les champs privés en haut de la classe
  #name;
  #health;
  #level;

  constructor(name, health, level = 1) {
    this.#name = name;
    this.#health = health;
    this.#level = level;
  }
}

const hero = new Character('Link', 100, 3);
console.log(hero.#health); // Uncaught SyntaxError: reference to undeclared private field or method #level
```

> **NOTE** les méthodes peuvent, elles aussi, être privées

#### _Getters_

Un **accesseur** permet d'exposer la donnée à l'extérieur.

La syntaxe est assez particulière :
on définit une méthode publique avec l'opérateur `get`, cette méthode sera
automatiquement liée à la propriété de même nom

> [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/get)

```js
class Character {
  // …

  // Getter pour les points de vie
  get level() {
    return this.#level;
  }
}
console.log(hero.level); // NOTE : on n'utilise pas de parenthèses → on appelle la propriété liée !
```

> **REMARQUE** on pourrait tout à fait créer une méthode traditionnelle
> sans l'opérateur `get` pour récupérer la valeur…

Testons la modification :

```js
console.log(hero);
// console.log(hero.#level); // Uncaught SyntaxError: reference to undeclared private field or method #level
console.log(hero.level); // affiche `1`

hero.#level = 4; // Uncaught SyntaxError: reference to undeclared private field or method #level

// peut-être ?
hero.level = 4;
console.log('niveau supérieur atteint', hero.level); // 3 → raté !
```

#### _Setters_

Un **mutateurs** permet de modifier la propriété privée de manière contrôlée.

La syntaxe se base sur le même principe que les _setters_ avec l'opérateur `set`.

> [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/set)

```js
class Character {
  // …

  // Setter pour le niveau
  set level(newLevel) {
    if (newLevel < 0) {
      console.error("Le niveau ne peut pas être négatif !");
      return; // On arrête l'exécution de la méthode
    }

    this.#level = newLevel;
  }
}

hero.level = 30; // Le setter est appelé
console.log(hero.level); // Le getter est appelé, affiche 30
hero.level = -50; // Le setter est appelé, affiche l'erreur et la valeur n'est pas modifiée.
console.log(hero.level); // Le getter est appelé, affiche 30
```
