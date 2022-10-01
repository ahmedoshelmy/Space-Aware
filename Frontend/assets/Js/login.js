
let logged_in = false;
document.getElementById('sign-in-button').onclick=function(){
    const username = document.getElementById('username-in').value
    const password = document.getElementById('password-in').value
    const data = { username: username,password:password,'email':'rr@r.com' };


fetch('http://127.0.0.1:8000/accounts/login/', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(r=>{
    console.log(r['score'])
    if(r.ok){
      sessionStorage.setItem('status','loggedIn') 
      sessionStorage.setItem('username',username) 
    }
    else sessionStorage.setItem('status','loggedOut') 
})
.catch(e=>{
    console.log(e)
})
fetch(`http://127.0.0.1:8000/accounts/single_profile/${username}`).then(e=>{
  console.log()
})
}
if(!logged_in){
    // document.getElementById("account-view").innerHTML = '<h1>You are not logged in<h1>'
    // document.getElementById("quizzes-view").innerHTML = '<h1>You are not logged in<h1>'
    // document.getElementById("reels-view").innerHTML = '<h1>You are not logged in<h1>'
    // document.getElementById("account-view").innerHTML = '<h1>You are not logged in<h1>'
}
