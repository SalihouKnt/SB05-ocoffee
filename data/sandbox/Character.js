// Usine à objets
// → « Moule à gaufre »
class Character {
  // constructeur
  constructor(name, health, level = 1) {
    // propriété
    this.name = name;
    this.health = health;
    this.level = level;

    console.log('CETTE INSTANCE est ', this.name);
  }

  // méthode → ce que l'objet peut faire = comportement
  attack(target) {
    // Appel : hero.attacks(monter)
    // dans cette méthode `this` = `hero` : c'est lui qui appelle `attacks`
    // → il est à gauche de la méthode
    console.log(`${this.name} attacks ${target.name}`); // this = hero

    const damage = 5 * this.level;
    target.takeDamage(damage);
  }

  takeDamage(damage) {
    // Appel : monster.takeDamage(d)
    // dans cette méthode `this` = `monster` : c'est lui qui appelle `takeDamage`
    // → il est à gauche de la méthode
    this.health -= damage; // this = monster

    // contrôle
    if (this.health <= 0) {
      this.health = 0;
      console.log(`${this.name} is dead!`);
    }
    else {
      console.log(`${this.name} takes ${damage} damage. ${this.health} HP left.`);
    }
  }

  fall() {
    // exemple de ré-utilisation d'une fonction
    this.takeDamage(5);
  }
}

// on va fabriquer un objet concret à partir de ce moule,
// de la classe
// → on INSTANCIE la classe
const hero = new Character('Link', 100, 3); // hero est une INSTANCE de la classe Character
console.log(hero);

// on peut crée autant d'instances que l'on veut
const monster = new Character('Ganon', 60); // utilisation du paramètre par défaut
// monster.health = -50; // ici, on peut accéder directement à la donnée et la modifier sans aucun contrôle !
console.log(monster);

// Le fait de pouvoir modifier directement une propriété
// rend mon code pas du tout sécurisé
// → on risque de tout casser
hero.level = -3;

// appel de méthode
hero.attack(monster);
hero.attack(monster);
hero.attack(monster);
hero.attack(monster);
