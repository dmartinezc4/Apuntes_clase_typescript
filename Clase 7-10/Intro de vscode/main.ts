export const add = (a: number, b: number): number =>   a + b;

export const multiply =(a:number,b:number): number => a*b;

export const substraction =(a:number,b:number): number => a-b;

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
