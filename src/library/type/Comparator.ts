/**
 * A function determining the order of elements by comparing value `a` against `b`. 
 * Should return a negative number for less than, 0 for equal to and a positive number for greater than.
 */
 export type ComparisonFunction = <T>(a: T, b: T) => number

 /**
  * Findes elements by a truth check. 
  * Should return `true` for the element you're trying to match. 
  * Otherwise return `false`  
  */
  export type Predicate = <T>(a: T) => boolean