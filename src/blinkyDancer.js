var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

//update constructor
BlinkyDancer.prototype.constructor = BlinkyDancer;

//add new methods to makeBD.prototype
BlinkyDancer.prototype.step = function(){  //remove param later
  var self = this;

  Dancer.prototype.step.call(self);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  self.$node.toggle();
};




