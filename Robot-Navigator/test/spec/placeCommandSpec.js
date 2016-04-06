describe("Place command Suite", function() {

    it("Place command executed", function() {   
    place("0,1,NORTH");
    expect(getReport()).toEqual("0,1,NORTH");
  });
});

