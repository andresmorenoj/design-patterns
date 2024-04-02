class Singleton {
	constructor() {
		console.log('Entra constructor');
		if(Singleton.instace) {
			console.log('Ya existe');
			return Singleton.instace
		};

		console.log('No existe');
		Singleton.instace = this;
	}
}

const singleton = new Singleton();
const singleton2 = new Singleton();

// Caso practico
class WeekDays {
	daysEs = [
		"Lunes",
		"Martes",
		"Miercoles",
		"Jueves",
		"Viernes",
		"Sabado",
		"Domingo"
	];

	daysEn =  [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday"
	];

	constructor(lang) {
		this.lang = lang;

		if(WeekDays.instace) {
			return WeekDays.instace
		}

		WeekDays.instace = this;
	}

	getDays() {
		return this.lang === 'es' ? this.daysEs : this.daysEn
	}
};

const weekDays = new WeekDays("en");
const weekDays2 = new WeekDays();

console.log(weekDays.getDays());
console.log(weekDays2.getDays());