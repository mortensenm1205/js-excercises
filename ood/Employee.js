(function (exports) {

  function Employee(name, dept) {
    //I thought setting the name in the initial
    //instance was private enough, so 'setting'
    //didn't seem needed on values that wouldn't
    //technically need changing. But if so, the
    //method below does while keeping name private
    // this.setName = function(name) {
    //   name = name;
    // };

    //put name in a closure *boom* this way it
    //can't be accessed by this, only with
    //this.getName() will it have access to
    //name
    this.getName = function() {
      return name;
    };

    //same concept here
    this.getDept = function() {
      return dept;
    };
  };

  exports.Employee = Employee;

})(this);
