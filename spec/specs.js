describe('wordOrder', function(){
  it("returns one word if its the only word entered", function(){
    expect(wordOrder("world")).to.equal("world");
  });

  it("returns the words in order of appearance if there are no duplicates,", function(){
    expect(wordOrder("hello world")).to.equal("hello, world");
  });

  it("returns the words ordered by frequency", function(){
    expect(wordOrder("hello world world")).to.equal("world, hello");
  });

  it("returns the words ordered by frequency and if equal frequency the tie-breaker is first appearance", function(){
    expect(wordOrder("world hello")).to.equal("world, hello");
  });

  it("returns the words ordered by frequency and if equal frequency the tie-breaker is first appearance", function(){
    expect(wordOrder("world hello world hello world hello xyz apple banana")).to.equal("world, hello, xyz, apple, banana");
  });
});
