const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    original: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".about_content .section_subheader", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".about_btn", {
    ...scrollRevealOption,
    delay: 2000,
});

//room container

ScrollReveal().reveal(".room_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".service_list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
});