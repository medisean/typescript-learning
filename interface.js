function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jame", lastName: "Cook" };
console.log(greeter(user));
