const navMob = document.getElementById("nav-mob");
function openMenu() {
    navMob.classList.toggle("nav-mob-visible");
}
const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();