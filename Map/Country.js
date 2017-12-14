(function(global) {

  function Country(name, capital, population, language) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.language = language;
  }

  global.Country = Country;

})(this);
