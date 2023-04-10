window.addEventListener('DOMContentLoaded', () =>{

    let profileIcon = document.getElementById('profileIcon');
    let profileInfo = document.getElementById('profileInfo');
    profileInfo.style.display = 'none';
    
    profileIcon.addEventListener('click', (e)=> {
        profileInfo.style.display = 'flex';
        console.log('teste');
    })
    let backButton = document.getElementById('backButton');
    backButton.addEventListener('click', ()=> {
        profileInfo.style.display = 'none';
        console.log('teste1');
    })
    

})