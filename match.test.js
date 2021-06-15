describe('Setting the first day' , function(){
  it('It should return the day of the week as Friday for the first date' , function(){
      let match = matchingFactory();
    
      match.setDay1("1997-09-12")
      assert.deepEqual({ day: 'Friday', color: '' },match.getDay1());
      
  });
  it('It should return the day of the week as Wednesday for the first date' , function(){
    let match = matchingFactory();
  
    match.setDay1("2013-01-16")
    assert.deepEqual({ day: 'Wednesday', color: '' },match.getDay1());
    
});

it('It should return the day of the week as Sunday for the first date' , function(){
  let match = matchingFactory();
 
  match.setDay1("1963-07-14")
  assert.deepEqual({ day: 'Sunday', color: '' },match.getDay1());
  
});

})
describe('Setting the second day' , function(){
  it('It should return the day of the week as Thursday for the second date' , function(){
      let match = matchingFactory();
     
      match.setDay2("1994-09-29")
      assert.deepEqual({ day: 'Thursday', color: '' },match.getDay2());
      
  });
  it('It should return the day of the week as Sunday for the second date' , function(){
    let match = matchingFactory();
   
    match.setDay2("1971-01-03")
    assert.deepEqual({ day: 'Sunday', color: '' },match.getDay2());
    
});

it('It should return the day of the week as Tuesday for the second date' , function(){
  let match = matchingFactory();

  match.setDay2("2021-08-10")
  assert.deepEqual({ day: 'Tuesday', color: '' },match.getDay2());
  
});

})
describe('Colour Settings' , function(){
  it('It should add the feature of red to the first date when the two entered dates fall on different days' , function(){
      let match = matchingFactory();
   
      match.setDay1("1994-09-29");
      match.setDay2("1994-09-25");
      assert.deepEqual({ day: 'Thursday', color: '' }, match.getDay1());
      
  });
  it('It should add the feature of blue to the second date when the two entered dates fall on different days' , function(){
    let match = matchingFactory();
   
    match.setDay1("1997-09-29");
    match.setDay2("1994-09-25");
    assert.deepEqual({ day: 'Sunday', color: '' }, match.getDay2());
    
});

it('It should add the feature of green to both date when the two entered dates fall on the day' , function(){
  let match = matchingFactory();
 
  match.setDay1("1963-07-14");
  match.setDay2("1994-09-25");
  assert.deepEqual({ day: 'Sunday', color: '' }, match.getDay1());
  
});

})

