var assert = require('assert');
var Media = require('../model/media');

describe('Media', function() {
  describe('test contructor', function() {
    it('contructor without parameter', function() {
      var mediaItem = new Media();
    });
    it('contructor with parameter', function() {
      var mediaItem = new Media('');
    });
  });
  describe('test getName() function', function() {
    it('media name with parameter set', function() {
      var mediaItem = new Media('hello');
      assert.equal(mediaItem.getName(), 'hello');
    });
    it('media name with parameter empty', function() {
      var mediaItem = new Media('');
      assert.equal(mediaItem.getName(), '');
    });
    it('media name without parameter', function() {
      var mediaItem = new Media();
      assert.equal(mediaItem.getName(), undefined);
    });
  });
  describe('test getUrl() function', function() {
    it('media url with parameter set', function() {
      var mediaItem = new Media('amici_di_letto.mp4');
      assert.equal(mediaItem.getUrl(), '/amici_di_letto.mp4');
    });
    it('media url with parameter empty', function() {
      var mediaItem = new Media('');
      assert.equal(mediaItem.getUrl(), '/');
    });
    it('media url without parameter', function() {
      var mediaItem = new Media();
      assert.equal(mediaItem.getUrl(), '/' + undefined);
    });
  });
});
