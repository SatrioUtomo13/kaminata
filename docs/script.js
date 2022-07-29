// profile click
const profile = document.getElementById('profile');
const profileClick = document.getElementById('profile-click');
profile.addEventListener('click', function(){
    profileClick.classList.toggle('profile-click')
})

// konfirmasi logout
const logout = document.getElementById("logout");
const konfirmasi = document.getElementById("confirm");
const main = document.getElementById("main");
const close = document.getElementById("close");
logout.addEventListener('click', function(){
    konfirmasi.style.display = 'flex';
    main.style.display = 'none';
})
close.addEventListener('click', function(){
    konfirmasi.style.display = 'none';
    main.style.display = 'flex';
})

const x = 10;