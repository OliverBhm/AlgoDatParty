import { isPalindrome } from '.';

describe('isPalindrome', () => {
  it('should check if a string is a palindrome', () => {
    expect(isPalindrome('abccba')).toBeTruthy();
    expect(isPalindrome('a')).toBeTruthy();
    expect(isPalindrome('abc')).toBeFalsy();
    expect(isPalindrome('safd')).toBeFalsy();
  });
});
