window.addEventListener('DOMContentLoaded', (event) =>{
    let form = document.getElementById('user_form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let registerInformarion = {
            nome: userName,
            email: email,
            password: password,
        }
        let options = {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(registerInformarion),
        }
        fetch('http://localhost:3030/user/register', options).then(
            (res) => {
                console.log(res);
                document.getElementById('userName').value = '';
                document.getElementById('password').value ='';
                document.getElementById('email').value ='';
            },
        )
    })
})