console.log(sessionStorage.getItem('status'))

if(sessionStorage.getItem('status')!=='loggedIn')
document.getElementById("account-view").innerHTML = '<h1>You are not logged in<h1>'
else{
    document.getElementById("name_nexto_image").innerHTML = `${sessionStorage.getItem('username')}`
    document.getElementById("imposcore").innerHTML = `${sessionStorage.getItem('score')}`
}   

document.getElementById('logout').onclick=function(){
    const data = { username: sessionStorage.getItem('username')};
fetch('http://127.0.0.1:8000/accounts/logout/', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(r=>{
    console.log(r)
    sessionStorage.setItem('status','loggedOut') 
})
.catch(e=>{
    console.log(e)
})
console.log(logged_in)
}