describe("Left command Suite", function() {

    it("Place command executed", function() {   
    place("0,0,NORTH");
    expect(getReport()).toEqual("0,0,NORTH");
  });
  it("Left command executed", function() {   
    left();	
    expect(getReport()).toEqual("0,0,WEST");
  });
});

