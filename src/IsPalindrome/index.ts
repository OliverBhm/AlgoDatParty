/**
 * Test if the given string is a palindrome. A palindrome is a string that is the same read forwards as well as backwards
 * e.g. isPalindrome('abccba') --> true
 * isPalindrome('abc') --> false
 * @param haystack the string to check
 * @returns `true` if the string is a palindrome, `false` otherwise.
 */
export const isPalindrome = (haystack: string): boolean =>
  haystack
    .split('')
    .every(
      (char: string, i: number) => char === haystack[haystack.length - 1 - i],
    );
