interface IComponent {
  getDetail: () => string;
}

class ProductComponent implements IComponent {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail() {
    return `${this.name}`;
  }
}

abstract class ProductDecorator implements IComponent {
  protected component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  public getDetail() {
    return this.component.getDetail();
  }
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: IComponent, tradename: string, brand: string) {
    super(component);

    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail() {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`;
  }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
  private price: number;

  constructor(component: IComponent, price: number) {
    super(component);
    this.price = price;
  }

  getDetail() {
    return `${super.getDetail()} price:${this.price}`;
  }
}

// ejecución

const productComponent = new ProductComponent("cerveza");
console.log(productComponent.getDetail());

// decorator 1 con Component
const commercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  "aguila",
  "light"
);
console.log(commercialInfoProduct.getDetail());

// decorator 2 con Component
const storeProduct = new StoreProductDecorator(commercialInfoProduct, 100);
console.log(storeProduct.getDetail());
