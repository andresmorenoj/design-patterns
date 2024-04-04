class ClientComponent {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();

    return data;
  }
}

// decorator base
class ClientDecorator {
  constructor(clientComponent) {
    this.clientComponent = clientComponent;
  }

  async getData() {
    return await this.clientComponent.getData();
  }
}

// decorator 1
class UppercaseClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    const newData = data.map((item) => {
      item.title = item.title.toUpperCase();
      return item;
    });

    return newData;
  }
}

// decorator 2
class HTMLClientDecorator extends ClientDecorator{
	async getData(){
		const data = await super.getData();
		const newData = data.map(item => {
			item.title = `<h1>${item.title}</h1>`
			item.thumbnailUrl = `<img src="${item.thumbnailUrl}">`
			return item;
		})

		return newData;
	}
}

(async () => {

	const URL = "https://jsonplaceholder.typicode.com/photos";
	const client = new ClientComponent(URL);
	const data = await client.getData()
	// console.log(data);

	const upperClient = new UppercaseClientDecorator(client);
	const dataUpper = await upperClient.getData();
	// console.log(dataUpper);

	const htmlCliente = new HTMLClientDecorator(upperClient);
	const dataHtml = await htmlCliente.getData();

	content1.innerHTML = dataHtml.reduce((acc, item) => {
		return acc + item.title + item.thumbnailUrl
	}, '');

	const htmlCliente2 = new HTMLClientDecorator(client);
	const dataHtml2 = await htmlCliente2.getData();

	content2.innerHTML = dataHtml2.reduce((acc, item) => {
		return acc + item.title + item.thumbnailUrl
	}, '');
})()