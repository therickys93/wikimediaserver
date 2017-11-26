var assert = require('assert');

describe('Working', function() {
  describe('simple assert', function() {
    it('1 = 1', function() {
      assert.equal(1, 1);
    });
    it('1 != 2', function() {
      assert.notEqual(1, 2);
    });
  });
});
