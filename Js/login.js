var logInEmail = document.querySelector('#email');
var logInPass = document.querySelector('#pass');
var logInBtn = document.querySelector('#logIn-btn');
var anchor = document.querySelector('#anchor');
var form = document.querySelector('form');
var logInAlert1 = document.querySelector('#logInAlert1');
var logInAlert2 = document.querySelector('#logInAlert2');

var userAccounts =JSON.parse(localStorage.getItem('userAccounts'));
console.log(userAccounts);






// function logIn(){

//     for(var i = 0 ; i<userAccounts.length ; i++ ){

//         if(userAccounts[i].userEmail === logInEmail.value && userAccounts[i].userPass === logInPass.value && logInEmail.value !== "" &&  logInPass.value !== ""){
            
//                 anchor.setAttribute('href','home.html');
//                 logInAlert1.classList.remove('d-none');

//         }else{

//           logInAlert1.classList.add('d-none');
//         };
//     };

    
// };


function logIn(){

    for(var i = 0 ; i<userAccounts.length ; i++ ){

       validateLogInIputs();
    };

    
};


logInBtn.addEventListener('click' , function(e){
  // e.preventDefault();
  logIn();


} )



function validateLogInIputs(){

for(var i = 0 ; i < userAccounts.length ; i++){

  if (userAccounts[i].userEmail === logInEmail.value && userAccounts[i].userPass === logInPass.value ){

    anchor.setAttribute('href','home.html');
    logInAlert1.classList.add('d-none')
    logInAlert2.classList.add('d-none')

    //to use it to display name in home page
    localStorage.setItem('currentUser' , userAccounts[i].userName);

  }else if (userAccounts[i].userEmail !== logInEmail.value && userAccounts[i].userPass !== logInPass.value){

    logInAlert1.classList.remove('d-none')
    logInAlert2.classList.add('d-none')

  }else if(logInEmail.value == "" &&  logInPass.value == ""){

    logInAlert2.classList.remove('d-none')
    logInAlert1.classList.add('d-none')

  }

}


}

