/**
 * Generates a random interger between min (inclusive) and max (inclusive)
 * @param min 
 * @param max 
 * @returns A random integer
 */
export function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Gennerates a random string of length
 * @param length the length of the string
 * @returns 
 */
export function randomString(length: number): string {
  let random = '';
  for (let i = 0; i < length; i++) {
    random += String.fromCharCode(randomInt(0, 25) + 97);
  }

  return random;
}
