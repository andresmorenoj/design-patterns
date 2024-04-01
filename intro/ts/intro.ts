class Drink {
	private name: string;
	
	constructor(name: string) {
		this.name = name;
	}

	info(): string {
		return this.name
	}
};

const drink3 = new Drink('agua');
console.log(drink3.info());

// Herencia
class Beer2 extends Drink {
	private alcohol: number;
	
	constructor(name: string, alcohol: number) {
		super(name);
		this.alcohol = alcohol
	};

	info(): string {
		return `${super.info()} con ${this.alcohol} of alcohol`
	}
}

const beer2 = new Beer2('aguila', 1.5);
console.log(beer2.info());
