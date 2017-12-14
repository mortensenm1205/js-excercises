(function(global) {

  function Office(){
    this.workerList = [];
  };

  Office.prototype.addWorker = function(worker, show) {
    if(this.workerList.includes(worker)) {
      //You'll need to update this if you want to use an object, worker.name. But for now use a string
      show.elementAlreadyExists(worker);
      return worker.name + " has already been added!";
    } else {
      this.workerList.push(worker);
      show.addHTMLElementToDom(worker);
      return worker.name + " is now added!"
    }
  };

  Office.prototype.getWorkerList = function() {
    return this.workerList;
  }

  global.Office = Office;


})(this);
