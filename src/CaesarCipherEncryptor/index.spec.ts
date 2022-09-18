import { encrypt } from '.';
describe('CaesarCipherEncryptor', () => {
  it('should encrypt a string with given shift', () => {
    expect(encrypt('abc', 2)).toEqual('cde');
  });

  it('should wrap on overfloew', () => {
    expect(encrypt('xyz', 2)).toEqual('zab');
  });
});
