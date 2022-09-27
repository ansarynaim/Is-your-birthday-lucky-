const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const luckyResult = document.querySelector("#result");
const checkNumberButton = document.querySelector("#check-number");


function checkYourBirthdate(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  const luckyNumberValue = luckyNumber.value;
  if(luckyNumberValue<0)
  {
    luckyResult.innerText = "Uh, oh! Lucky number cannot be less than 0";
  }
  else if (dob && sum && luckyNumberValue){
      if(sum % luckyNumberValue === 0){
        luckyResult.innerText = "Hurray!! Your Birthday is Lucky🥳";
          
      }else{
        luckyResult.innerText = "OOPS!! Sorry! Your Birthday is not that Lucky😞";
             
      }   
  }else{
    luckyResult.innerText = "Please enter both the fields!!";
  }
}

function calculateSum(dob){
  dob = dob.replaceAll("-","");
  let sum=0;
  for(let i=0; i<dob.length;i++){
      sum+=Number(dob.charAt(i));
  }
  return sum;
}
checkNumberButton.addEventListener('click', checkYourBirthdate);
