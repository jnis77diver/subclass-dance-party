var ModernDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ModernDancer.prototype = Object.create(Dancer.prototype);

//update constructor
ModernDancer.prototype.constructor = ModernDancer;

//add new methods to makeBD.prototype
ModernDancer.prototype.step = function(){  //remove param later
  var self = this;
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep.call(self, self.timeBetweenSteps);
  //ALTERNATIVE
  Dancer.prototype.step.call(self);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  self.$node.toggle();
};