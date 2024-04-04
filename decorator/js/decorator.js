// component
class ProductComponent{
	constructor(name){
		this.name = name;
	}

	getDetail() {
		return `${this.name}`
	}
}

// decorator wrapper
class ProductDecorator{
	constructor(productComponent) {
		this.productComponent = productComponent
	}

	getDetail() {
		return this.productComponent.getDetail();
	}
}

// decorator 1
class ComercialInfoProductDecorator extends ProductDecorator{
	constructor(productComponent, tradename, brand) {
		super(productComponent);

		this.tradename = tradename;
		this.brand = brand;
	}

	getDetail() {
		return `${this.tradename} ${this.brand} ${super.getDetail()}`
	}
}

// decorator 2 

class StoreProductoDecorator extends ProductDecorator {
	constructor(productComponent, price) {
		super(productComponent);

		this.price = price;
	}

	getDetail(){
		return `${super.getDetail()} ${this.price}`
	}
}

// decorator 3

class HTMLProductDecorator extends ProductDecorator{
	getDetail() {
		return `
			<h1>Información de producto</h1>
			<p>${super.getDetail()}</p>
		`
	}
}

// Ejecución

const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

// decorator 1 con component
const comercialInfoProduct = new ComercialInfoProductDecorator(productComponent, "london", "pepito");
console.log(comercialInfoProduct.getDetail());

// decorator 2 con component
const storeProduct = new StoreProductoDecorator(productComponent, 100);
console.log(storeProduct.getDetail());

// decorator 2 con decorator 1

const product = new StoreProductoDecorator(comercialInfoProduct, 100);
console.log(product.getDetail());

// decorador 3 con decorador 2 con decorador 1

const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail()