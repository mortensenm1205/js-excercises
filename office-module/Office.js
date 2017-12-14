(function(global) {

  function Worker(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  };

  Worker.prototype.generateId = function(worker) {
    if (worker) {
      this.id = 1;
    } else {
      ++this.id;
    }
  }

  Worker.prototype.getId = function() {
    return this.id;
  }

  global.Worker = Worker;


})(this);
