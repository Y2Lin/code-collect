function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

var F = function () { };
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;