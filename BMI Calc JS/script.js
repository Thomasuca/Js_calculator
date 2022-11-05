const form = document.querySelector('form');
form.addEventListener('submit',function(e){

e.preventDefault();

const height=parseInt(document.querySelector('#height').value);
// console.log(height);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');

if((height === '') || (height<0) || (isNaN(height))){
    // Nan!==NaN
    results.innerHTML="Please provide a valid height";

}else if((weight ==='') || (weight<0) || (isNaN(weight))){
    results.innerHTML="Please provide a valid weight";
}
else{
    // Calculate BMI
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    // display the results
    results.innerHTML=bmi;
}

});
