// konfirmasi logout
const logout = document.getElementById("logout");
const konfirmasi = document.getElementById("confirm");
const main = document.getElementById("main");
const close = document.getElementById("close");
logout.addEventListener('click', function(){
    konfirmasi.style.display = 'flex';
    main.classList.add('blur');
})
close.addEventListener('click', function(){
    konfirmasi.style.display = 'none';
    main.classList.remove('blur');
})
