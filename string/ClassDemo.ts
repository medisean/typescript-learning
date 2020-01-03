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

// 类型模板
var sites = {
  site1: "Google",
  site2: "Baidu",
  sayHello: function () { }
};

sites.sayHello = function () {
  console.log("hello", sites.site1);
}


var invokeSites = function (obj) {
  console.log(obj.site1);
  console.log(obj.site2);
}

sites.sayHello();
invokeSites(sites);