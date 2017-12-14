(function(global) {
  function View() {};

  View.prototype.createCountryHTML = function(country) {
    return "<h2>" +  country.name + "</h2><li Capital: " + country.capital + "</li><li>Population: " + country.population + "</li><li>Language: " + country.language + "</li>";
  };

  View.prototype.addCountryToDom = function(country) {
    var countries = document.getElementById('#countries');
    var newCountry = document.createElement('ul');
    newCountry.innerHTML = this.createCountryHTML(country);
    countries.appendChild(newCountry);
  }

  global.View = View;

})(this);
