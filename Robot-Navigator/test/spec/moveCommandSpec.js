describe("Move command Suite", function() {

    it("Place command executed", function() {   
    place("0,0,NORTH");
    expect(getReport()).toEqual("0,0,NORTH");
  });

  it("Right command executed", function() {   
    right();	
    expect(getReport()).toEqual("0,0,EAST");
  });

   it("Move command executed", function() {   
    move();	
    expect(getReport()).toEqual("1,0,EAST");
  });
});
