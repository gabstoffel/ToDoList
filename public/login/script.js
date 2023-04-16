window.addEventListener('DOMContentLoaded', (e)=> {
    let form = document.getElementById('user_form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let loginInformation = {
            email: email,
            password: password
        }
        let options = {
            method: "POST",
            headers: new Headers({'content-type':'application/json'}),
            body: JSON.stringify(loginInformation),
        }
        console.log(JSON.stringify(loginInformation));
        try {
            fetch('http://localhost:3030/user/login', options).then((res) => {
                if(res.status == 200){
                    window.location.assign("http://localhost:3030/todolist")
                    let info = {
                        method: "GET",
                        headers: new Headers({
                            'content-type':'application/json',
                        }),
                        credentials: 'include',
                    }
                    try{
                        fetch('http://localhost:3030/todolist', info)
                    } catch (err){
                        console.log(err);
                    }
                } 
            })
        } catch (err){
            console.log(err);
        }
    })
})