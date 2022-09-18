export function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomString(length: number): string {
  let random = '';
  for (let i = 0; i < length; i++) {
    random += String.fromCharCode(randomInt(0, 25) + 97);
  }

  return random;
}
