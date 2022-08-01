// profile click
const profile = document.getElementById('profile');
const profileClick = document.getElementById('profile-click');
profile.addEventListener('click', function(){
    profileClick.classList.toggle('profile-click')
})


// logout click
const confirm = document.getElementById('confirm');
const main = document.getElementById('main');
const cancel = document.getElementById('cancel');
// const profileLogout = document.getElementById('profile-logout');
// profileLogout.addEventListener('click', function(){
//     confirm.style.display = 'flex';
//     main.style.display = 'none';
// })

const logout = document.getElementsByClassName('logout');
for(let i = 0; i < logout.length; i++){
    logout[i].addEventListener('click', function(){
        confirm.style.display = 'flex';
        main.style.display = 'none';
    })
}

cancel.addEventListener('click', function(){
    confirm.style.display = 'none';
    main.style.display = 'flex';
})





const x = 10;