class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(newStrategy) {
    this.strategy = newStrategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

class ForeignSalesStrategy {
  calculate(amount) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 20;
  }
}

const regularSale = new RegularSaleStrategy(0.16);
const discountsale = new DiscountSaleStrategy(0.16, 3);
const foreignSale = new ForeignSalesStrategy();

const sale = new SaleContext(regularSale);
// console.log(sale.calculate(10));

sale.setStrategy(discountsale);
// console.log(sale.calculate(10));

sale.setStrategy(foreignSale);
// console.log(sale.calculate(10));

// Caso practico

const data = [
  {
    name: "Erdiger Pikantus",
    country: "Alemania",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh sodales, elementum turpis quis, consectetur nisl. Mauris a luctus lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBS7CIEmrDfvow1YznAliJle3phi4qS7XDS3zxNcsOLA&s",
  },
  {
    name: "Corona",
    country: "Mexico",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh sodales, elementum turpis quis, consectetur nisl.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_LlSQXBQuUCbFO7LQzKgnMa8F9i5U1uTGyFGGml0Fw&s",
  },
  {
    name: "Aguila",
    country: "Colombia",
    info: "Mauris a luctus lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img: "https://jotajotafoods.com/wp-content/uploads/2022/06/CER00037.jpg",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);

    this.date = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.date, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
				<div>
					<h2>${beer.name}</h2>
					<p>${beer.country}</p>
				</div>
				<hr/>	
			`
      );
    }, "");
  }
}

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

class DetailStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
				<div>
					<h2>${beer.name}</h2>
					<p>${beer.country}</p>
					<p>${beer.info}</p>
				</div>
				<hr/>	
			`
      );
    }, "");
  }
}

class ListWithImagesStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
				<div>
				<h2>${beer.name}</h2>
					<img src="${beer.img}" width="20%"/>
				</div>
				<hr/>	
			`
      );
    }, "");
  }
}

const strategies = [
  new ListStrategy(),
  new DetailStrategy(),
  new ListWithImagesStrategy(),
];

options.addEventListener("change", (event) => {
  const option = event.target.value;
  info.setStrategy(strategies[option]);
  info.show();
});
