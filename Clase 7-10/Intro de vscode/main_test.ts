import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { add } from "./main.ts";
import { multiply } from "./main.ts";
import { substraction } from "./main.ts";


Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function multiplyTest() {
  assertEquals(multiply(3, 4), 12);
});

Deno.test(function substractTest() {
  assertEquals(substraction(10, 5), 5);
});