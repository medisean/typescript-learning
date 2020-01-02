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

class Student extends Person {
  id: string;
  constructor(name: string, id: string) {
    super(name)
    this.id = id
  }

  disp(): void {
    super.disp();
    console.log(this.id);
  }
}

let s: Student = new Student("John", "123");
s.disp();