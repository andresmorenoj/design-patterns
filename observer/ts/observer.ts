interface IObserver<T> {
  refresh: (value: T) => void;
};

interface ISubject<T> {
	observers: IObserver<T>[];
	subscribe: (observer: IObserver<T>) => void;
	unsubscribe: (observer: IObserver<T>) => void;
	notify: (value: T) => void;
};

class Subject<T> implements ISubject<T> {
	observers: IObserver<T>[];
	
	constructor() {
		this.observers = [];
	};

	subscribe(observer: IObserver<T>) {
		this.observers.push(observer);
	};

	unsubscribe(observer: IObserver<T>){
		this.observers = this.observers.filter(obs => obs !== observer);
	};

	notify(value: T) {
		this.observers.forEach(observer => {
			observer.refresh(value)
		});
	};
};

class Observer<T> implements IObserver<T>{
	private fn: (value: T) => void;

	constructor(fn: (value: T) => void) {
		this.fn = fn
	}

	refresh(value: T){
		this.fn(value);
	};
};

const subject = new Subject<number>();
const observer1 = new Observer<number>(num => console.log(`Hello observer1 ${num}`));

subject.subscribe(observer1);
subject.notify(30)
