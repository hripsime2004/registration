let signUpButton = document.querySelector('.logbut')
const signInButton = document.querySelector('#signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//border red 
let signup = document.querySelector('.signup');
let inputs = document.querySelectorAll('.input');

signup.onclick = () => {
    inputs.forEach((inp,i) => {
        if(inp.value.trim() == '') {
            inp.value = '';
            inp.style.border = '1px solid red'
        }
        else {
            inp.value = inp.value.trim();
            inp.style.border = 'none'
        }
    })
}


let login = document.querySelector('.login');
let inputlog = document.querySelectorAll('.inputlog');

login.onclick = () => {
    inputlog.forEach((inp) => {
        if(inp.value.trim() == '') {
        inp.value = '';
        inp.style.border = '1px solid red'
        }else{
            inp.value = inp.value.trim();
            inp.style.border = 'none'
        }
    } )
}


//mail validator
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("Անվավեր էլփոստի հասցե");
document.form1.text1.focus();
return false;
}
}


//input do not allow numbers
  document.getElementById("name").addEventListener("input", function(event) {
    let inputValue = event.target.value;
    let name = inputValue.replace(/[0-9]+/g, '');
    event.target.value = name;
  });

//
