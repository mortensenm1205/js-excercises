(function(global) {

  function Show() {};

  Show.prototype.createHTMLElement = function(worker) {
    var setup;
    setup = "<h1>";
    setup += worker.name + "</h1>";
    setup += "<p>Age: " + worker.age + "</p>";
    return setup;
  };

  Show.prototype.addHTMLElementToDom = function(worker) {
    var container = document.createElement('div');
    container.innerHTML = this.createHTMLElement(worker);
    document.body.appendChild(container);
  }

  Show.prototype.elementAlreadyExists = function(worker) {
    alert(worker.name + " has already been added!");
  }

  global.Show = Show;

})(this);
