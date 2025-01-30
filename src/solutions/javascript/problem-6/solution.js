
function calculateArea(width, height) {
    return (width * height);
  }console.log(calculateArea(5,3));
  



  function isEven(number) {
    if(number%2===0){
        return true;
    } return false;
  }console.log(isEven(4));
  



  
  function greetUser(name, time) {
        if(time=="morning"){
            return("Good morning " + name);
        }else if (time=="evening"){
            return("Good Evening " + name);
        }
  }console.log(greetUser("jane","morning"));