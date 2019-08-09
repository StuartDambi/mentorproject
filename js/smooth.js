const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll('.navbar a');

const navbarTogglerClick = () => {
    navbarToggler.classList.toggle('open-navbar-toggle');
    navbarMenu.classList.toggle('open');
};
navbarToggler.addEventListener('click', navbarTogglerClick);



const navbarLinkClick = () => {
    if(navbarMenu.classList.contains('open')) {
        // Close Navbar Menu in small screens
        navbarToggler.click();
    }
};
navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));