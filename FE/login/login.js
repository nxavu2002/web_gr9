// import { apiUrl } from "./environment.js";
const apiUrl = "http://127.0.0.1:9999/";

const form = document.getElementById('login-form-container')
form.addEventListener('submit', login)

//CRUD - Create Retrieve Update Delete - Post Get Put Delete
async function login(event){
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const result = await fetch(`${apiUrl}authen/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    })
    res = await result.json(); 
    if (res.status === 'OK'){
        console.log('Got the token', res.data)
        window.location = "http://127.0.0.1:5500/FE/home/index.html"
        window.sessionStorage.setItem("accessToken", res.data);
        alert('Success')
    }else {
        alert(result.error)
    }   
}   