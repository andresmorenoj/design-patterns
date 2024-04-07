class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

class Base64Implementor {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str.split(".").reduce((acc, item) => {
      return acc + `<p>${item.trim()}</p>`;
    }, "");
  }

  decode(str) {
    return str.split("</p>").reduce((acc, item) => {
      return item !== "" ? acc + item.replace("<p>", "") + ". " : acc + "";
    }, '');
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64Implementor());
console.log(encoder1.encode("pato"));
console.log(encoder1.decode("cGF0bw=="));

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(
  encoder2.encode("Esto es un texto. Y aquí comienza otro. Y aquí otro más")
);
console.log(
  encoder2.decode(
    "<p>Esto es un texto</p><p>Y aquí comienza otro</p><p>Y aquí otro más</p>"
  )
);
