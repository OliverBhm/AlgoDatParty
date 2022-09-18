import { generateAlphabet } from './Generate';

/**
 * A radom boolean value
 * @returns
 */
export const randomBoolean = () => Boolean(randomInt(0, 1));

/**
 * Returns a random int between min (inclusive) and max (inclusive)
 * @param min
 * @param max
 * @returns
 */
export function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random string of a given length
 * @param length
 * @param hasUppercase
 * @param hasNumbers
 * @param hasSpecialChars
 * @returns
 */
export function randomString(
  length: number,
  hasUppercase: boolean = false,
  hasNumbers: boolean,
  hasSpecialChars: boolean = false,
): string {
  let possibleValues: string = generateAlphabet().join('');
  possibleValues += hasUppercase ? generateAlphabet(true).join('') : '';
  possibleValues += hasNumbers ? '0123456789' : '';
  possibleValues += hasSpecialChars ? '!"§$%&/()=' : '';

  let random = '';
  for (let i = 0; i < length; i++) {
    random += possibleValues[randomInt(0, possibleValues.length - 1)];
  }

  return random;
}
