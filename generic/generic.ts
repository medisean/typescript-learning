function identity(arg: number): number {
  return arg;
}

function identity1(arg: any): any {
  return arg;
}

function identity3<T>(arg: T): T {
  return arg;
}

console.log(identity(111))
console.log(identity1(111))
console.log(identity1("222"))

console.log(identity3(123), typeof identity3(123))
console.log(identity3(true), typeof identity3(true))
console.log(identity3([1, "222"]), typeof identity3([1, "222"]))

let a: any = 24
console.log(identity3(a), typeof identity3(a))

let output = identity3<string>("myString");
console.log(output, typeof output)


function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

loggingIdentity([23, "44"])

let myIdentity: <T>(arg: T) => T = identity3;
console.log(myIdentity<string>("111"), typeof myIdentity<string>("111"))