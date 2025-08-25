// déclare une classe appelée User
class User {
constructor (id, firstName, lastName, age) {
 	this.id = id; // Stocke la valeur passée dans la propriété id de l’objet.
	this.firstName = firstName; // Stocke le prénom.
	this.lastName = lastName; // Stocke le nom.
	this.age = age; // Stocke l'âge.
}

// METHODE D'INTRODUCTION
introduce () {
	console.log(`je m'appelle ${this.firstName} ${this.lastName} et j'ai ${this.age} ans`);
}

}

// INSTANCIER

// C'est créer un objet à partir de ma classe

const user1 = new User(1, `Dave`, `Lopper`, 42);

// POURQUOI INSTANCIER ?

/* Créer des objets indépendants : chaque objet a ses propres valeurs, 
même s’ils partagent les mêmes propriétés et méthodes.

Réutilisabilité : on peut créer autant d’instances 
que nécessaire sans réécrire la structure.