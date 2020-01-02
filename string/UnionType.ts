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
