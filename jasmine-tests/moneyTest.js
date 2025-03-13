import {fromatCurrency} from '../scripts/utils/money.js'; 

describe('convert C to D', () => {
  it('convert C to D', () => {
    expect(fromatCurrency(2095)).toEqual('20.95');
  });
  it('woks with 0', () => {
    expect(fromatCurrency(0)).toEqual('0.00');
  });
  it('round up', () => {
    expect(fromatCurrency(2000.5)).toEqual('20.01');
  });
  it('round down', () => {
    expect(fromatCurrency(2000.4)).toEqual('20.00');
  })
});

