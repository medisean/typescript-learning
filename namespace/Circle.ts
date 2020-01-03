/// <reference path = "IShape.ts" />

namespace Drawing {
  export class Circle implements IShape {
    constructor() {

    }
    public draw() {
      console.log("this is a circle")
    }
  }
}