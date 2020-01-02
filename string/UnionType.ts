interface UnionType {
  program: string;
  commandLine: string[] | string | (() => string);
}

// string
let options: UnionType = { program: "hello", commandLine: "world" };
console.log(options.commandLine);

// string[]
let strs: UnionType = { program: "strs", commandLine: ["str1", "str2"] }
console.log(strs.commandLine);

// method
let methods: UnionType = {
  program: "ms", commandLine: () => {
    return "methods line"
  }
}
var fn: any = methods.commandLine;
console.log(fn());

// multiple extends
interface P1 {
  v1: string;
}

interface P2 {
  v2: string;
}

interface Child extends P1, P2 {

}

var c: Child = { v1: "v1", v2: "v2" };
console.log(c.v1, c.v2);
