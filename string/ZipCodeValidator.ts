import { StringValidator } from './Validator'

export class ZipCodeValidator implements StringValidator {
  isAccesstaple(s: string) {
    return s.length == 5
  }
};

let zipCodeValidator = new ZipCodeValidator();
console.log(zipCodeValidator.isAccesstaple('s1'));

let numbers: number[] = [1, 2, 4, 5];
for (let n in numbers) {// print index
  console.log(n);
}

for (let i in numbers) {// print value
  console.log(numbers[i]);
}

// string demo
console.log("**********")
let s: string = "abcdb";
for (let c = 0; c < s.length; c++) {
  console.log(s[c])
}

console.log(s.indexOf('b'));

// tuple
let t1: [string, number] = ["abc", 19];
console.log(t1[0], t1[1]);

// enum
enum Color { // default is 0, 1, 2
  Red = 1,
  Green,
  Blue
}

let color = Color.Green;
console.log(color);
console.log(Color[2]);

// dict
console.log("**********")
let dic = { "abc": 111 }
console.log(dic["abcd"]) // undifined
console.log(dic["abc"]) // 111

if (dic["abc"]) {
  console.log("existed")
} else {
  console.log("not existed")
}

dic["bbb"] = "989"
delete dic["bbb"]
console.log(dic["bbb"])

