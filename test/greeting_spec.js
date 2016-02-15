import {expect} from 'chai';

import {greet} from '../src/greet';

describe('greet spec', () => {

  it('interpolates name in a simple greeting', () => {
      expect(greet('peter')).to.equal('hello peter');
  });

  it('handles nulls with a stand-in', () => {
      expect(greet()).to.equal('hello, my friend');
  });
});
