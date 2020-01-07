class Address {
  address: string
  port: number

  constructor(address: string, port) {
    this.address = address
    this.port = port
  }
}

class Client {

  connect(address: Address) {

  }
}

class Server {
  bind(address: string) {

  }

  listen(times: number) {

  }
}