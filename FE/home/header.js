const accessToken = '';
var user;
function checkToken (){
    const token = window.sessionStorage.getItem("accessToken")
    if (!token){
     return false;
    }
    this.accessToken = token;
    return true;
 }
 function logOut() {
    window.sessionStorage.removeItem("accessToken");
    window.location.reload()
 }
 (() => {
    if(checkToken()){
        document.querySelector("#login-btn").classList.add('hide');
        document.querySelector("#loged-btn").classList.remove('hide'); 
        document.querySelector("#loged-btn").classList.add('show'); 
        document.querySelector('#logout-btn').classList.remove('hide'); 
        document.querySelector('#logout-btn').classList.add('show'); 
        this.user = JSON.parse(atob(this.accessToken.split('.')[1]));
        document.querySelector("#loged-btn").append(this.user.username)  
        return;  
    }
 })()
