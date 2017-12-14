var map = new WorldMap();
var view = new View();
var peru = new Country("Peru", "Lima", "58 million", "Spanish");
var germany = new Country("Germany", "Berlin", "68 billion", "German");
map.addCountry(peru, view);
map.addCountry(germany, view);
