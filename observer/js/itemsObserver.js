class SubjectJs {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => {
      observer.refresh(data);
    });
  }
}

class ItemsSubject extends SubjectJs {
  constructor() {
    super();
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }
}

class HTMLElementObserver {
  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((acc, item) => {
      return (
        acc +
        `
				<p>
					${item}
				</p>
			`
      );
    }, "");
  }
};

class Observer2{
	constructor(fn) {
		this.fn = fn;
	}
	refresh(data) {
		this.fn(data)
	}
}

const items = new ItemsSubject();
const observerDiv1 = new HTMLElementObserver(div1);
const observerDiv3 = new Observer2((data) => {
	div3.innerHTML = data.length
})

items.subscribe(observerDiv1);
items.subscribe(observerDiv3);

function add(){
	const name = txtName.value;
	items.add(name)
}