
let day= document.getElementById("day_input");
let month= document.getElementById("month_input");
let year = document.getElementById("year_input");


let output1= document.getElementById("day-output");
let output2= document.getElementById("month-output");
let output3= document.getElementById("year-output");

let bounce1= document.getElementById('error1');
let bounce2= document.getElementById('error2');
let bounce3= document.getElementById('error3');
 let form = document.querySelector('form')
let submit_btn = document.getElementById("btn");

day.addEventListener("input", function(){
    
    if (day.value > 31  || day.value <= 0 ){
        bounce1.textContent="not valid ";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce1.textContent="";
    }
     
})
month.addEventListener("input", function(){
    
    if (month.value > 12 || month.value <= 0){
        bounce2.textContent=" not valid";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce2.textContent ="";
    }
     
})
year.addEventListener("input", function(){
    if (year.value > 2023 || year.value <= 0){
        bounce3.textContent="not valid";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce3.textContent ="";
    }
     
})
// output1.addEventListener()

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var my_date = new Date();
    let DOB = my_date.getDay();
    let MOB =my_date.getMonth();
    let YOB = my_date.getFullYear();

    output1.textContent = parseInt(31)- +parseInt(day.value) + "days";
    output2.textContent= parseInt(MOB) -parseInt(month.value) + "months";
    output3.textContent=parseInt(YOB)-parseInt(year.value) + "years";
    
   

        
})
 