describe("Random Number", function() {


  it('should produce a random number', function() {
    expect(ran).toEqual(someNum);
  });

  it('should know when it is less than 50', function() {
    expect(lessThan(ran)).toBeTruthy();
    expect(lessThan(ran)).toBeFalsy();

  });

  it('should know when it is greater than 50', function() {
    expect(greaterThan(ran)).toBeTruthy();
    expect(greaterThan(ran)).toBeFalsy();
  });

});
