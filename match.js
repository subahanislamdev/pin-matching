// pin generate start
function getPin(){
    var pin = generatePin()
    var pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin()
    }
}
function generatePin(){
    var random = Math.round(Math.random()*10000)
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    var pins = getPin()
    var inputfieldpin = document.getElementById('display-pin')
    inputfieldpin.value = pins;
})
// pin generate end
// pin setup start
document.getElementById('calculator').addEventListener('click',function(event){
    var number = event.target.innerText;
    var typenumberfield = document.getElementById('input-cals-field')
    var previousnumber = typenumberfield.value 
    if(isNaN(number)){
        // clear the input field
        if(number == 'C'){
            typenumberfield.value ='';
        }
        else if(number === '<'){
         var digits = previousnumber.split('');
         digits.pop()
         var remainNumber = digits.join('');
         typenumberfield.value = remainNumber;
        }
    }
    // calculate number
    else{
       var newnumber = previousnumber + number;
       typenumberfield.value = newnumber;

    }
})
// pin setup end
// message notification start code
document.getElementById('verify-btn').addEventListener('click',function(){
    // generate pin
    var successMessage = document.getElementById('display-pin');
    var currentSuccessMessage = successMessage.value;
    // matching pin
    var failorMessage = document.getElementById('input-cals-field')
    var currentFailorMessage = failorMessage.value;

    var Success = document.getElementById('success')
    var Failor = document.getElementById('failor')

    if(currentSuccessMessage === currentFailorMessage){
         Success.style.display = 'block'
         Failor.style.display = 'none'
    }
    else{
        Failor.style.display = 'block'
        Success.style.display = 'none'
    }
}) 
// message notification end code