/**
 * A function determining the order of elements by comparing value `a` against `b`. 
 * Should return a negative number for less than, 0 for equal to and a positive number for greater than.
 */
 export type ComparisonFunction = <T>(a: T, b: T) => number