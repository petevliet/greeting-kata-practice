import {expect} from 'chai';

import {greet} from '../src/greet';

describe('greet spec', () => {

  it('interpolates name in a simple greeting', () => {
      expect(greet('peter')).to.equal('Hello, peter.');
  });

  it('handles nulls with a stand-in', () => {
      expect(greet()).to.equal('Hello, my friend.');
  });

  it('returns string in all caps if name is all caps', () => {
      expect(greet('PETER')).to.equal('HELLO PETER!');
  });

  it('handles array of two names of input', () => {
      expect(greet(["peter", "paul"])).to.equal('Hello, peter and paul.');
  });

  it('handles arbitrary number of names in an input', () => {
      expect(greet(["Amy", "Brian", "Charlotte"])).to.equal("Hello, Amy, Brian, and Charlotte.");
      expect(greet(["peter", "paul", "regina", "shannon", "mike", "tiffany", "jones"])).to.equal('Hello, peter, paul, regina, shannon, mike, tiffany, and jones.');
  });

  it('handles names with all caps in the array', () => {
      expect(greet(["Amy", "BRIAN", "Charlotte"])).to.equal("Hello, Amy and Charlotte. AND HELLO BRIAN!");
  });
});
