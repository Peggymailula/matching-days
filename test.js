describe('Setting the first day' , function(){
    it('It should return the day of the week as Tuesday for the first date' , function(){
        let match = matchingFactory();
       // var firstDate = new Date()
        match.setDay1("1996-01-22")
        assert.deepEqual({ day: 'Monday', color: '' },match.getDay1());
        
    });

})
// describe("The Matching Days Functions", function(){

//     describe("Should be able to set two dates and het their days with their colors.", function(){
//       it("should be able to get the date input of 1996-01-22 from DATE ONE and show it's day by with color BROWN.", function(){
//         let dayMatch = matchingFactory();
  
//         dayMatch.setDay1("1996-01-22");
  
//         assert.deepEqual(dayMatch.getDay1()(), { day: 'Monday', color: '' });
//       })
  
//       it("should be able to get the date input of 2017-04-06 from DATE TWO and show it's day by with color BLUE.", function () {
//         let dayMatch = matchingFactory();
  
//         dayMatch.setDay2("2017-04-06");
  
//         assert.deepEqual(dayMatch.getDay2(), { day: 'Thursday', color: '' });
//       })
//     })
  
//     describe("Should be able to get the BOTH DAYS with their colors from differnt dates. ", function(){
//       it("should be able to get the day set for DATE ONE and show it's day by with color BROWN.", function(){
//         let dayMatch = matchingFactory();
  
//         dayMatch.setDay1("1996-01-22");
//         dayMatch.setDay2("2010-07-01");
  
//         assert.deepEqual(dayMatch.getDay1(), { day: 'Monday', color: '' });
//       })
  
//       it("should be able to get the day set for DATE TWO and show it's day by with color BLUE.", function () {
//         let dayMatch = matchingFactory();
  
//         dayMatch.setDay1("1965-02-24");
//         dayMatch.setDay2("2001-07-13");
//         assert.deepEqual(dayMatch.getDay2(), { day: 'Friday', color: '' });
//       })
  
//     })
  
//     });