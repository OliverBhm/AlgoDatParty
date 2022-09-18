import { decrypt, encrypt } from '.';
import { randomInt, randomString } from '../library/util/Random';
describe('CaesarCipherEncryptor', () => {
  it('should encrypt a string with given shift', () => {
    expect(encrypt('abc', 2)).toEqual('cde');
  });

  it('should wrap on overflow', () => {
    expect(encrypt('xyz', 2)).toEqual('zab');
  });

  /*it('', () => {
    for (let i = 0; i < 1000; i++) {
      const randomShift: number = randomInt(0, 1000);
      const hay: string = randomString(10);
      const encrypted: string = encrypt(hay, randomShift);
      expect(decrypt(encrypted, randomShift)).toEqual(hay);
    }
  });*/
});
