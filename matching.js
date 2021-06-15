document.addEventListener('DOMContentLoaded', function(){

  var matchDaysTemplate = document.querySelector('.userTemplate').innerHTML
  var template = Handlebars.compile(matchDaysTemplate)
  var weekDays = document.querySelector(".userData")
  var dateOne = document.querySelector(".datum1")
  var dateTwo = document.querySelector(".datum2")
  var firstColour = document.getElementById("input1");
  var secondColour = document.getElementById("input2");

  var Instance = matchingFactory();

  weekDays.innerHTML = template ({days : Instance.getDays()})

  var matchingDays = function(){
      
    
      var first = dateOne.value;
      var second = dateTwo.value;

      if (first){
          var firstDate = new Date(first)
          Instance.setDay1(firstDate.getDay())
          weekDays.innerHTML = template ({days : Instance.matchTheDays()})
       
      } 
      if (second){
          var secondDate = new Date(second)
          Instance.setDay2(secondDate.getDay())
          weekDays.innerHTML = template ({days : Instance.matchTheDays()})
       
      }
  }

  firstColour.addEventListener('change', matchingDays)
  secondColour.addEventListener('change', matchingDays)
})