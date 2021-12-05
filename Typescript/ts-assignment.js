/*

On this assignment, let's imagine you have been asked to create a new type
that can be reused. This new type T is going to be used to pick a set of properties
whose type are assignable to another type U.

Example:

```
// This is what you need to implement
type MyPickByType = <...>

type MyOnlyBoolean = MyPickByType<{
  name: string;
  count: number;
  isReadonly: boolean
  isEnable: boolean
}, boolean> // It should return a type with the following interface: { isReadonly: boolean; isEnable: boolean; }
```

What should this application do?
- It should have a solution for the typing challenge given above
- Your solution could consist of a single index.ts file with the type definition (your solution for the challenge, an implementation for PickByType) and at least 4 examples of your newly created type being used (like the OnlyBoolean type above)

What do we expect to see in this assignment?
- You should follow good code standards for Typescript
- It should be easy to read through.

What should be submitted?
- A link to a source code repo where we can browse and evaluate the code.
- A print showing the output of some executions of the program.


P.S: There are a number of possible solutions linked here

*/
console.log(typeof MyOnlyBoolean);
