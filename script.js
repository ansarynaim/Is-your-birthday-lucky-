const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const luckyResult = document.querySelector("#result");
const checkNumberButton = document.querySelector("#check-number")

function compareValue(sum, luckyNumber){
  if (sum%luckyNumber === 0){
    console.log("Your Birthday is lucky 🎉")
    luckyResult.innerText = "Your Birthday is lucky 🎉"
  } else {
    console.log("Your Birthday is not lucky 😓")
    luckyResult.innerText = "Your Birthday is not lucky 😓"
  }
}


function checkBirthdayIsLucky(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValue(sum, luckyNumber.value)
  console.log(sum)
}

function calculateSum(dob){
 var newDate = dob.replaceAll("-", "");
    var sum = 0;
    for (var i = 0; i < newDate.length; i++) {
        sum += Number(newDate.charAt(i));
    }
    return sum;
}


checkNumberButton.addEventListener('click',checkBirthdayIsLucky);