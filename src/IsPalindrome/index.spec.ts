import { isPalindrome } from '.';
import { randomInt, randomString } from '../library/util/Random';

describe('isPalindrome', () => {
  it('should check if a string is a palindrome', () => {
    for (let i = 0; i < 1000; i++) {
      const test: string = randomString(randomInt(1, 100));
      const reversed = [...test].reverse().join('');
      expect(isPalindrome(`${test}${reversed}`)).toBeTruthy();
      expect(isPalindrome(`${test}`)).toBeFa();
    }
  });
  
  it('should check if a short string is a palindrome', () => {
      expect(isPalindrome('a')).toBeTruthy();
  });
  
  it('should check if a string is not a palindrome', () => {
      expect(isPalindrome('abc')).toBeFalsy();
  });
});
