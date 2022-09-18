/**
 * Encrypts a lower case string using the CaesarCipherEncryptor algorithm.
 * @param haystack the lowercase string to encrypt.
 * @param shift By how many letters you'd want to your string to shift. E.g. encrypt('abc', 2) --> 'cde'
 * It will also wrap around the alphabet e.g. encrypt('a', 28) --> 'c'.
 * @returns
 */
export function encrypt(haystack, shift): string {
  return [...haystack].reduce(
    (encrypted: string, c: string, i: number) =>
      encrypted +
      String.fromCharCode(((haystack.charCodeAt(i) - 97 + shift) % 26) + 97),
    '',
  );
}
