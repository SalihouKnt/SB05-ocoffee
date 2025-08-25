class Character {
  // Attributs privés
  // on utilise des `#` devant les attributs de classe pour les passer en PRIVÉ
  #name;
  #health;
  #level = 1; // valeur par défaut

  constructor(name, health, level) {
    // comme je suis à l'INTÉRIEUR de ma classe,
    // je peux modifier et/ou assigner ds valeurs
    this.#name = name;
    this.#health = health;

    // pour les paramètres par défaut, une condition nous permet
    // dev oir si on doit modifier la valeur
    if (level) {
      this.#level = level;
    }

    this.inventory = []; // on peut mixer avec des champs publiques
  }

  displayName() {
    // Les propriétés privées sont accessibles depuis l'INTÉRIEUR de la classe
    console.log('displayName (internal)', this.#name);
  }

  // Getter
  // l'opérateur `get` nous permet d'avoir une propriété `name` ;
  // dès qu'on appelle cette propriété, la fonction est appelée
  // → permet d'exposer la valeur (calculée ou non) de la propriété à l'extérieur
  get name() {
    // → retourne la valeur de mon attribut privé
    return this.#name;
  }

  // j'expose `level`
  get level() {
    return this.#level;
  }

  // Modification
  // on définit un Setter
  set level(newLevel) {
    // étape de validation → nous ajoute un contrôle
    if (newLevel < 0) {
      console.error("Le niveau ne peut pas être négatif");
      return;
    }

    if (!Number.isInteger(newLevel)) {
      console.error("Le niveau doit être un entier");
      return;
    }

    this.#level = newLevel;
  }
}

const hero = new Character('Link', 100);
console.log(hero);

// console.log(hero.#name); // Private field '#name' must be declared in an enclosing class
hero.displayName();

// Accéder à la valeur d'un champ privé grâce à mon getter
console.log('get name (external)', hero.name);


// Modification
// hero.#level = 4; // SyntaxError: Private field '#level' must be declared in an enclosing class
// peut être ça ?
hero.level = 4; // OK grâce au setter → appelle le setter comme ça hero.level(4)
console.log('get level (external)', hero.level);

