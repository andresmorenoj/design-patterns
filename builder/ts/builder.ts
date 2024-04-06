class Person {
  private name: string;
  private lastname: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastname: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }
}

interface IPersonBuilder {
  name: string;
  lastname: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];
  setName: (name: string) => IPersonBuilder;
  setLastname: (lastname: string) => IPersonBuilder;
  setAge: (age: number) => IPersonBuilder;
  setCountry: (country: string) => IPersonBuilder;
  setCity: (city: string) => IPersonBuilder;
  addHobby: (hobby: string) => IPersonBuilder;
  build: () => Person;
}

class PersonBuilder implements IPersonBuilder {
  name: string;
  lastname: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor() {
    this.name = "";
    this.lastname = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  reset() {
    this.name = "";
    this.lastname = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  setName(name: string): IPersonBuilder {
    this.name = name;
    return this;
  }
  setLastname(lastname: string): IPersonBuilder {
    this.lastname = lastname;
    return this;
  }
  setAge(age: number): IPersonBuilder {
    this.age = age;
    return this;
  }
  setCountry(country: string): IPersonBuilder {
    this.country = country;
    return this;
  }
  setCity(city: string): IPersonBuilder {
    this.city = city;
    return this;
  }
  addHobby(hobby: string): IPersonBuilder {
    this.hobbies.push(hobby);
    return this;
  }

  build(): Person {
    const person = new Person(
      this.name,
      this.lastname,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

class PersonDirector {
	private personBuilder: PersonBuilder;

	constructor(personBuilder: PersonBuilder){
		this.personBuilder = personBuilder;
	}

	setPersonBuilder(personBuilder: PersonBuilder){
		this.personBuilder = personBuilder;
	}

	createPerson(name: string, lastname: string){
		this.personBuilder.setName(name).setLastname(lastname);
	}
}

// Implementación con director
const personBuilder = new PersonBuilder();
const pepe = personBuilder
  .setName("pepe")
  .setLastname("perez")
  .setAge(20)
  .addHobby("dormir")
  .build();

	console.log(pepe);

// Implementación con director
const personDirector = new PersonBuilder();
const director = new PersonDirector(personDirector);
director.createPerson("pepe 2", "perez 2")
const pepe2 = personDirector.build()
console.log(pepe2);

	