function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    console.log("false")
  }
}

assert(null, "cool");