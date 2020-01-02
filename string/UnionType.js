// string
var options = { program: "hello", commandLine: "world" };
console.log(options.commandLine);
// string[]
var strs = { program: "strs", commandLine: ["str1", "str2"] };
console.log(strs.commandLine);
// method
var methods = {
    program: "ms", commandLine: function () {
        return "methods line";
    }
};
var fn = methods.commandLine;
console.log(fn());
var c = { v1: "v1", v2: "v2" };
console.log(c.v1, c.v2);
