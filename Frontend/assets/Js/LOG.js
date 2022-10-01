window.onload = async () => {
        
document.getElementById("home-signup").onclick= function(){
    document.getElementById("allcont").style=" visibility: visible; opacity:1;"
    document.getElementById("main").style=" opacity:0.1; background-color:#eee"
}
document.getElementById("hi_signin").onclick=function(){
    document.getElementById("allcont").style=" visibility: hidden;"
    document.getElementById("main").style="opacity:1;"
}
document.getElementById("sign-up-btn").onclick=function(){
    const username = document.getElementById('username-up').value
    const password = document.getElementById('password-up').value
    const email = document.getElementById('email-up').value
    const data = { username: username,password:password,email:email};
fetch('http://127.0.0.1:8000/accounts/register/', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(r=>{
    sessionStorage.setItem('status','loggedIn') 
    sessionStorage.setItem('username',username) 
    sessionStorage.setItem('score',0) 
    document.getElementById("home-login").style.display = none
    document.getElementById("home-signup").style.display = none
    document.getElementById("home-logout").style.display = inline
})
.catch(e=>{
    console.log(e)
})
}
console.log(sessionStorage.getItem['status'])
// document.getElementById("home-logout").onclick=function(){

// }
if(sessionStorage.getItem['status']== 'loggedIn' || sessionStorage.getItem['status']==undefined){
    document.getElementById("home-logout").style.display = none
}else{
    document.getElementById("home-login").style.display = none
    document.getElementById("home-signup").style.display = none
    document.getElementById("home-logout").style.display = inline
}    
  };
