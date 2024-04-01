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

// interfaces
interface Product {
	price: number;
	getPrice(): string
}

// Herencia
class Beer2 extends Drink implements Product {
	private alcohol: number;
	price: number;
	
	constructor(name: string, alcohol: number, price: number) {
		super(name);
		this.alcohol = alcohol;
		this.price = price
	};

	getPrice(): string {
		return `$ ${this.price}`
	}

	info(): string {
		return `${super.info()} con ${this.alcohol} of alcohol`
	}
}

// implementación de interface
class Snack implements Product {
	price: number;
	name: string;

	constructor(name: string, price: number){
		this.name = name;
		this.price = price
	}

	getPrice(): string {
		return `El precio es: $ ${this.price}`
	}
}

const beer2 = new Beer2('aguila', 1.5, 100);
console.log(beer2.info());

const products: Product[] = [
	new Beer2('aguila', 1.5, 100),
	new Snack('chitos', 50),
	new Beer2('Reeds', 2.8, 200)
]

const getPrice = (items: Product[]) => {
	for(const item  of items) {
		console.log(item.getPrice());
	}
}

getPrice(products)