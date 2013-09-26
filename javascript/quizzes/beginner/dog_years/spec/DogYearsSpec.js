describe( "Dice#roll", function() {
  it("should return an number", function() {
    expect(typeof Dice.roll()).toBe("number")
  });      

  it("should return a number greater than 0", function() {
    expect(Dice.roll()).toBeGreaterThan(0)
  });  

  it("should return a number less than 7", function() {
    expect(Dice.roll()).toBeLessThan(7)
  });  
});
