describe("Right command Suite", function() {

    it("Place command executed", function() {   
    place("0,0,NORTH");
    expect(getReport()).toEqual("0,0,NORTH");
  });
   it("Right command executed", function() {   
    right();	
    expect(getReport()).toEqual("0,0,EAST");
  });
});
