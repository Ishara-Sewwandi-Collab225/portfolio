const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  document.getElementById("sideMenu").style.right = "0";
}
function closeMenu() {
  document.getElementById("sideMenu").style.right = "-100%";
}


window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add( 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove( 'shadow-sm', 'bg-opacity-50');
    } else {
        navBar.classList.remove( 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('shadow-sm', 'bg-opacity-50');
    }
})

