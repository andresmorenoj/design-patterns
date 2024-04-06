class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `
			<form method="post" action="${this.action}">
				${this.controls.reduce((acc, item) => {
          return (
            acc +
            `
					<div>
						${this.getLabel(item)}
						${this.getInput(item)}
					</div>
				`
          );
        }, "")}
			</form>
		`;
  }

  getLabel(control) {
    return `
			<label>${control.text}</label>
		`;
  }

  getInput(control) {
    return `
			<input type="${control.type}"
				id="${control.name}"
				name="${control.name}"
			>
		`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.action = "";
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name,
      text,
      type: "text",
    });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({
      name,
      text,
      type: "email",
    });
    return this;
  }

  setCheckbox(name, text) {
    this.controls.push({
      name,
      text,
      type: "checkbox",
    });
    return this;
  }

  setColor(name, text) {
    this.controls.push({
      name,
      text,
      type: "color",
    });
    return this;
  }

  build() {
    const form = new Form(this.controls, this.action);
    this.reset();
    return form;
  }
}

class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPersonForm() {
    this.formBuilder.reset();
    this.formBuilder.setText("firstname", "Nombre").setText("lastname", "Apellido");
  }
}

const formBuilder = new FormBuilder();
const personForm = formBuilder
  .setAction("add.php")
  .setText("firstname", "Nombre")
  .setText("lastname", "Apellido")
  .setCheckbox("drinker", "Eres bebedor")
  .setColor("color", "color favorito")
  .build();

console.log(personForm);

form1.innerHTML = personForm.getContent();

const director = new FormDirector(formBuilder);
director.createPersonForm();

form2.innerHTML = formBuilder.build().getContent()
