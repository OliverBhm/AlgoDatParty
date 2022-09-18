/**
 * Generates an english letter alphabet.
 * @param isUppercase `true` generates a uppercase alphabet.
 * @returns
 */
export const generateAlphabet = (
  isUppercase: boolean = false,
): Array<string> => {
  const aCharCode: number = isUppercase ? 65 : 97;
  return Array.from({ length: 26 }, (v: undefined, i: number) =>
    String.fromCharCode(aCharCode + i),
  );
};
