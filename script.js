const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const failedResult = document.querySelector('.fail');
const btn = document.querySelector('#btn');
function checkPasswords(){
  if(password.value !== confirmPassword.value){
    failedResult.style.display = "block";
     failedResult.textContent = "Your Password does not match.";
  }
  else{
    failedResult.style.display = "none";
  }
}

password.addEventListener('input',checkPasswords);
confirmPassword.addEventListener('input',checkPasswords);

btn.addEventListener('click',()=>{
  alert("Your form is successfully submitted");
})
