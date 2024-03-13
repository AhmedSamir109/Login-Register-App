
var user =localStorage.getItem('currentUser');
var welcome = document.querySelector('.welcome')
console.log(user)



var div = `

<div class="d-flex justify-content-center align-items-center w-100 vh-100">
<h1 class="text-bg-dark rounded-2 text-light p-5 shadow-lg">welcome to home page <span class="bg-white text-black p-2 rounded-3">${user}</span> </h1>
</div>


`

welcome.innerHTML=div;
