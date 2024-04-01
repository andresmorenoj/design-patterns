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
