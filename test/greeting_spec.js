import {expect} from 'chai';

import {greet} from '../src/greet';

describe('greet spec', () => {

  it('interpolates name in a simple greeting', () => {
      expect(greet('peter')).to.equal('Hello, peter');
  });

  it('handles nulls with a stand-in', () => {
      expect(greet()).to.equal('Hello, my friend');
  });

  it('returns string in all caps if name is all caps', () => {
      expect(greet('PETER')).to.equal('HELLO PETER!');
  });
});
