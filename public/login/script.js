window.addEventListener('DOMContentLoaded', (e)=> {

    let form = document.getElementById('user_form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let userName = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let loginInformation = {
            name: userName,
            password: password
        }
        let options = {
            method: "POST",
            headers: new Headers({'content-type':'application/json'}),
            body: JSON.stringify(loginInformation),
        }
        try {
            fetch('http://localhost:3030/user/login', options).then((res) => {
                console.log(res);
            })
        } catch (err){
            console.log(err);
        }
    })

})