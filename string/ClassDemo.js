var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.disp = function () {
        console.log(this.name);
    };
    return Person;
}());
// let p: Person = new Person("person");
var p = new Person();
p.disp();
