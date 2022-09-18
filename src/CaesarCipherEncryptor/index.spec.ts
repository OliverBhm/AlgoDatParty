import { decrypt, encrypt } from '.';
import { randomInt, randomString } from '../library/util/Random';
describe('CaesarCipherEncryptor', () => {
  it('should encrypt a string with given shift', () => {
    expect(encrypt('abc', 2)).toEqual('cde');
  });

  it('should wrap on overflow', () => {
    expect(encrypt('xyz', 2)).toEqual('zab');
  });
});
