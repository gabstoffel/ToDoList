window.addEventListener('DOMContentLoaded', () =>{
    let profileIcon = document.getElementById('profileIcon');
    let profileInfo = document.getElementById('profileInfo');
    profileInfo.style.display = 'none';
    profileIcon.addEventListener('click', (e)=> {
        profileInfo.style.display = 'flex';
    })
    let backButton = document.getElementById('backButton');
    backButton.addEventListener('click', ()=> {
        profileInfo.style.display = 'none';
    })
})