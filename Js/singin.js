
var signUpName = document.querySelector('#sign-name');
var signUpEmail = document.querySelector('#sign-email');
var signUpPass = document.querySelector('#sign-pass');
var signUpBtn = document.querySelector('#signUp-btn');
var signUpNameAlert = document.querySelector('#signUpNameAlert');
var signUpEmailAlert1 = document.querySelector('#signUpEmailAlert1');
var signUpEmailAlert2 = document.querySelector('#signUpEmailAlert2');
var signUpPassAlert = document.querySelector('#signUpPassAlert');
var anchor = document.querySelector('#anchor');



if(localStorage.getItem('userAccounts') != null){

    var userAccounts =JSON.parse(localStorage.getItem('userAccounts'));
    console.log(userAccounts);

}else{

    var userAccounts =[];
};


function createAccount(){

    var account ={
        userName : signUpName.value,
        userEmail : signUpEmail.value,
        userPass : signUpPass.value
    };

    if(validateSignUpName() && validateSignUpEmail() && validateSignUpPass() && signUpName.value !== "" && signUpEmail.value !== "" && signUpPass.value !== ""){
    
    userAccounts.push(account);

    var jsonAcconts = JSON.stringify(userAccounts);

    localStorage.setItem('userAccounts' , jsonAcconts);

    return true ;
}

};






signUpBtn.addEventListener('click' , function(){
   
    createAccount();

    if(createAccount()){

        anchor.setAttribute('href' , 'index.html')
    };

})






function validateSignUpName(){

    var SignUpNameRegex = /^[A-Z][a-z -]{2,30}$/;
    var name = signUpName.value;

    if(SignUpNameRegex.test(name)){

        signUpName.classList.add('is-valid');
        signUpName.classList.remove('is-invalid');
        signUpNameAlert.classList.add('d-none')  

        return true ;

    }else{
        signUpName.classList.add('is-invalid');
        signUpName.classList.remove('is-valid');
        signUpNameAlert.classList.remove('d-none')  

        return false ;

    }
};

signUpName.addEventListener('blur' , validateSignUpName);


function validateSignUpEmail(){
    var signUpEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
    var email = signUpEmail.value;

for( var i = 0 ; i<userAccounts.length ; i++){

    if(signUpEmailRegex.test(email) && userAccounts[i].userEmail !== signUpEmail.value ){

      
        
        signUpEmail.classList.add("is-valid");
        signUpEmail.classList.remove("is-invalid");
        signUpEmailAlert1.classList.add("d-none");
        signUpEmailAlert2.classList.add("d-none");

        return true ;
    

    }else if (userAccounts[i].userEmail === signUpEmail.value){

        signUpEmail.classList.add('is-invalid');
        signUpEmail.classList.remove('is-valid');
        signUpEmailAlert2.classList.remove('d-none');
        signUpEmailAlert1.classList.add('d-none');


        return false ;

    }else if (signUpEmailRegex.test(email) == false){
        signUpEmail.classList.add('is-invalid');
        signUpEmail.classList.remove('is-valid');
        signUpEmailAlert1.classList.remove('d-none');
        signUpEmailAlert2.classList.add('d-none');
        
        return false ;

    }
    
} 

};

signUpEmail.addEventListener('blur' ,validateSignUpEmail);




function validateSignUpPass(){

    var signUpPassRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{1,}$/ ;
    var pass = signUpPass.value;

    if(signUpPassRegex.test(pass)){

      
        
        signUpPass.classList.add("is-valid");
        signUpPass.classList.remove("is-invalid");
        signUpPassAlert.classList.add("d-none");

        return true ;


    }else{

        signUpPass.classList.add('is-invalid');
        signUpPass.classList.remove('is-valid');
        signUpPassAlert.classList.remove('d-none');

        return false ;

    };

};

signUpPass.addEventListener('blur' ,validateSignUpPass);