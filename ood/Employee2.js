//I guess this is the way to create public and private
//methods and values without a constructor. We need
//to have a return obj with functions that access the
//values declared outside the return, which makes those
//values private
var Employee = (function() {
  var pName;
  var pDept;

  return {
    setName: function(name) {
        pName = name;
    },
    getName: function() {
        return pName;
    }
  };
})();
