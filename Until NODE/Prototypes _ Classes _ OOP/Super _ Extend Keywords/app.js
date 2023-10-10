class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		console.log('Pet constructor');
	}
	eat() {
		return `${this.name} is eating`;
	}
}

class Cat extends Pet {
	constructor(name, age, livesleft = 9) {
		// This will call Pet constructor
		super(name, age);
		console.log('Cat constructor', this);
		// this.name = "asd"
		// super.name = "asd"
		this.livesleft = livesleft;
	}
	meow() {
		return 'Meooww';
	}
}

class Dog extends Pet {
	// constructor() {
		// You have to call super(); First!
	// }
	bark() {
		return 'Woof';
	}
	eat() {
		return `${this.name} is DOggg`;
	}
}

// const monty = new Cat('monty', 25);
// const holo = new Dog('holo', 15);
