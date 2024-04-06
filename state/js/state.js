class DocumentContext{
	constructor(){
		this.content = '';
		this.state = new BlankState();
	}

	setState(state){
		this.state = state
	}

	write(text){
		this.state.write(this, text)
	}
}

class BlankState{
	write(documentContext, text){
		documentContext.content = text;
		documentContext.setState(new WithContentState())
	}
}

class WithContentState{
	write(documentContext, text){
		documentContext.content += ` ${text}`
	}
}

class ApprovedState{
	write(documentContext, text){
		console.log('Approved!');
	}
}

// Ejecución
const docContext = new DocumentContext();
console.log(docContext.state);

docContext.write("pato");
console.log(docContext.content);
console.log(docContext.state);

docContext.write("pato2");
console.log(docContext.content);

docContext.setState( new ApprovedState());
console.log(docContext.state);
docContext.write("pato 3")
console.log(docContext.content);

docContext.setState( new WithContentState());
console.log(docContext.state);
docContext.write("pato 3")
console.log(docContext.content);
