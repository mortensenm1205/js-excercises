(function(global) {

  function Worker(name, age) {
    this.name = name;
    this.age = age;
  }

  global.Worker = Worker;


})(this);
