 
/* color change random */
 /* function changecolor() {

  var bgColor = document.body.style.backgroundColor

   if (bgColor == "value" ) {
    document.body.style.backgroundColor = "blue";
   } else {
    document.body.style.backgroundColor = "value";

   }

} 



    
      function randomColor() {
        var blue = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var value = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        document.body.style.background = bgColor;
        }

 
 
 function randomColor() {
    var randomvalue = Math.random();

     if (randomvalue > 0.8) {
        document.body.style.backgroundColor = "value";
     } else if (randomvalue > 0.5){
     document.body.style.backgroundColor = "blue";
     } 

} 
 
    function TotalRandomColor() {
        var  blue  =  converttox(Math.round(Math.random()* 15));
        var  green =  converttox(Math.round(Math.random()* 15));
        var  red =  converttox(Math.round(Math.random()* 15));
        var  blue2  = converttox(Math.round(Math.random()* 15));
        var  green2 = converttox(Math.round(Math.random()* 15));
        var  red2 =  converttox(Math.round(Math.random()* 15));

        var  rgbValue = "#"+ blue + green + red +blue2 + green2 + red2;

        document.body.style.background = rgbValue;
     
         
}

function converttox(value) {
    if( value == 10 ){
        return  "A" 
    } 
    
    else if (value == 11){
          return "B"        
    }
    
    else if (value == 12){
          return "C"        
    }
    
    else if (value == 13){
          return  "D"        
    
    }
    
    else if (value == 14){
          return  "E"        

    }
    
    else if (value == 15){
          return  "F"        
    }
     else {
        return value
    }
}
 
 */



 // detta är kontakt java json 


 fetch("")
 .then(function(response){
       return response.json();

 })
 .then(function(data){
       studentData =data;
 })