(function(global) {

  function WorldMap() {
    this.countries = [];
  }

  WorldMap.prototype.addCountry = function (country, view) {
      if(this.countries.length === 0) {
        this.countries.push(country);
        view.addCountryToDom(country);
        return country.name + " has been added!";
      } else {
        for(var i = 0; i < this.countries.length; i++) {
          if(this.countries[i] === country) {
            throw "Country is already added!";
          }
        }
        this.countries.push(country);
        view.addCountryToDom(country);
        return country.name + " has been added!";
      }
  };

  global.WorldMap = WorldMap;

})(this);
