/// <reference path = "IShape.ts" />

namespace Drawing {
  export class Circle implements IShape {
    public draw() {
      console.log("this is a circle")
    }
  }
}