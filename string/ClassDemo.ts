class Person {
  name: string;

  constructor(name: string) {
    this.name = name
  }

  disp(): void {
    console.log(this.name)
  }
}

let p: Person = new Person("person");
p.disp();