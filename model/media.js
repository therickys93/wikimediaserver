function Media(name) {
  this.name = name;
  this.url = '/' + name;
}

Media.prototype.getName = function() {
  return this.name;
};

Media.prototype.getUrl = function() {
  return this.url;
};

module.exports = Media;
