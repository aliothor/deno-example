// deno-lint-ignore-file no-explicit-any
import { assert } from "https://deno.land/std@0.224.0/assert/mod.ts";

function loggedMethod(
  originalMethod: any,
  context: ClassMethodDecoratorContext,
): any {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]): any {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
    return "greet";
  }
}

Deno.test("test", (t) => {
  const p = new Person("Ron");
  assert(p.greet(), "greet");
});
