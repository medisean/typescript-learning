function identity(arg) {
    return arg;
}
function identity1(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
console.log(identity(111));
console.log(identity1(111));
console.log(identity1("222"));
console.log(identity3(123), typeof identity3(123));
console.log(identity3(true), typeof identity3(true));
console.log(identity3([1, "222"]), typeof identity3([1, "222"]));
var a = 24;
console.log(identity3(a), typeof identity3(a));
var output = identity3("myString");
console.log(output, typeof output);
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
loggingIdentity([23, "44"]);
var myIdentity = identity3;
console.log(myIdentity("111"), typeof myIdentity("111"));
