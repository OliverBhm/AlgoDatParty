const getACharCode = (isUppercase: boolean) => (isUppercase ? 65 : 97);

/**
 * Generates an english letter alphabet.
 * @param isUppercase `true` generates a uppercase alphabet.
 * @returns
 */
export const generateAlphabet = (
  isUppercase: boolean = false,
): Array<string> => {
  return Array.from({ length: 26 }, (v: undefined, i: number) =>
    String.fromCharCode(getACharCode(isUppercase) + i),
  );
};
