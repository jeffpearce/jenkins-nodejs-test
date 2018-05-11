const { expect } = require('chai');
const { theAnswer } = require('./index.js');

describe('what is ', () => {
  it('the answer?', async () => {
    expect(theAnswer()).to.equal(12);
  });
});
