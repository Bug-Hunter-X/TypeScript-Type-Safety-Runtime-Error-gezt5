function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

let result = add(1, 2); 
console.log(result); //3

let result2 = add(1, "2"); //throw new Error