function matchingFactory(){

    var matchingDays = [{day : 'Sunday', color: ""},
                        {day : 'Monday', color: ""}, 
                        {day : 'Tuesday', color: ""}, 
                        {day : 'Wednesday', color: ""}, 
                        {day : 'Thursday', color: ""}, 
                        {day : 'Friday', color: ""}, 
                        {day : 'Saturday', color: ""}]
  
    var firstDate = undefined;
    var secondDate = undefined;
  
    function setDay1(dateIn){
        firstDate = dateIn;
    }
    
    function setDay2(dateIn){
        secondDate = dateIn;
    }

    function getDay1(){
        if(firstDate){
          return matchingDays[firstDate.getDay()];
        }
      }
    
      function getDay2(){
        if(secondDate){
          return matchingDays[secondDate.getDay()];
        }
      }
  
    function getDays(){
      return matchingDays;
  }
  
  
    function matchTheDays(){   
  
    var matchingDays = [{day : 'Sunday', color: ""},
    {day : 'Monday', color: ""}, 
    {day : 'Tuesday', color: ""}, 
    {day : 'Wednesday', color: ""}, 
    {day : 'Thursday', color: ""}, 
    {day : 'Friday', color: ""}, 
    {day : 'Saturday', color: ""}]
  
       
       if (firstDate !== undefined &&  secondDate=== undefined){
            matchingDays[firstDate].color = "colour1";
            return matchingDays;
        }
        if ( secondDate !== undefined && firstDate === undefined){
          
          matchingDays[secondDate].color = "colour2";
          return matchingDays;
        }

        if ( secondDate === firstDate &  secondDate !== undefined && firstDate != undefined){
            matchingDays[ secondDate].color = "colour3";
            return matchingDays;
          } 
        else{
          matchingDays[firstDate].color = "colour1";
          matchingDays[ secondDate].color = "colour2";
          return matchingDays;
        }
    }
  
    return {
        setDay1,
        setDay2,
        matchTheDays,
        getDays,
        getDay2,
        getDay1
    }
  }