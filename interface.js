function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jame", lastName: "Cook" };
document.body.textContent = greeter(user);
