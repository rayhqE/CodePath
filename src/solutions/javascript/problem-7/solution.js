
function createCalculator() {
    return{
        add:function(a,b){return a+b},
        sub:function(a,b){return a-b},
        mul:function(a,b){return a*b},
        div:function(a,b){return a/b}


    }
  }
  console.log(createCalculator().div(16,8));