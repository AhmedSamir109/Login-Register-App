
var user =localStorage.getItem('currentUser');
var welcome = document.querySelector('.welcome')
console.log(user)



var div = `

        <div class="d-flex justify-content-center align-items-center w-100 vh-100">
            <h1 class="text-bg-dark rounded-2 p-sm-5 py-5 px-2 shadow-lg text-center">welcome to home page
                  <span class="bg-white text-black p-2 rounded-3 d-inline-block">${user}</span> 
            </h1>
        </div>
            `

welcome.innerHTML=div;
