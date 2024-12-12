# TypeScript Type Safety Runtime Error

This example demonstrates a common issue in TypeScript where type safety does not always prevent runtime errors.  While TypeScript's type system catches many errors during compilation, it doesn't prevent all runtime issues, particularly those related to type coercion.

The `add` function is declared to accept two numbers, but in the code, it's called with a number and a string. TypeScript doesn't throw an error during compilation, but at runtime, JavaScript attempts to coerce the string '2' into a number which then results in NaN. 

The solution involves adding runtime checks or improving type handling to mitigate such situations.
