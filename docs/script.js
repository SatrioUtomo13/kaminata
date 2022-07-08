// konfirmasi logout
const logout = document.getElementById("logout");
const konfirmasi = document.getElementById("confirm");
const main = document.getElementById("main");
logout.addEventListener('click', function(){
    konfirmasi.style.display = 'flex';
    main.classList.add('blur');
})
