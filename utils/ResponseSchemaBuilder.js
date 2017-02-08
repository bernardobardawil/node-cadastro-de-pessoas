class ResponseSchemaBuilder {
  constructor() {
    this._type;
    this._message;
    this._data;
  }

  type(tipo) {
    this._type = tipo;
    return this;
  }

  message(msg) {
    this._message = msg;
    return this;
  }

  data(dados) {
    this._data = dados;
    return this;
  }

  build() {
    return {
      type: this._type,
      message: this._message,
      data: this._data
    };
  }
}

module.exports = () => ResponseSchemaBuilder;
