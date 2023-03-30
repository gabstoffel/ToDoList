document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
    getProfile();
})
function updatePosts(){
    let options = {
        method: "GET",
        headers: new Headers({'content-type': 'application/json'}),
        credentials: 'include',
    }
    let promise = fetch('http://localhost:3030/todolist/all', options).then((res) =>{
        return res.json();
    })
    promise.then((posts) => {
        let postElements = '';
        posts.forEach((post) => {
            let postElement = `    
                <div id=${post._id} class="card mb-2">
                    <div class="card-header" draggable="true"h>
                        <h5 class="card-title">${post.title}</h5>
                        <button onclick="deletePost('${post._id}')" "type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                </div>
            ` 
            return postElements += postElement;
        })
        document.getElementById('posts').innerHTML = postElements;
    })
}
function newPost(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    if (title.length == 0 || description.length == 0) {
        alert('you need to input a title and a description to your task!');
    }else{
        let post = {title, description};
        let options = {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            credentials: 'include',
            body: JSON.stringify(post),
        }
        fetch('http://localhost:3030/todolist/new', options).then((res) => {
            updatePosts();
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
        })
    }
}
function deletePost(post){
    const task = document.getElementById(post);
    task.hidden = true;
    const jsonID = {
        _id: post,
    }
    const options = {
        method: "DELETE",
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify(jsonID),
    }
    try{
        fetch('http://localhost:3030/todolist/delete', options).then((res) => {
            updatePosts();
            console.log(res);
        })
    } catch(err){
        console.log(err);
    }
}
function getProfile(){
    let options = {
        method: "GET",
        headers: new Headers({'content-type': 'application/json'}),
        credentials: 'include',
    }
    let promise = fetch('http://localhost:3030/user/userinfo', options).then((res) => {
        return res.json();
    }).then((user) => {
        var userInfo = `
            <div id="name">${user.name}</div>
        `
        return userInfo;
    })
    promise.then(
        fetch('http://localhost:3030/todolist/userinfo', options).then((res) =>{
            return res.json();
        }).then((user) => {
            userInfo += `
                <div id="doneTasks">${user.totalTasks}</div>
                <div id="todoTasks">${user.doneTasks}</div>
            `
            return userInfo;
        })
    )
    console.log(userInfo);
    let userProfile = document.getElementById('profile')
    userProfile.innerHTML = userInfo;
}