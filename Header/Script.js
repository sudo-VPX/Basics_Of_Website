// ========== lement References ==========

const menuBtn = document.getElementById("Menu_Button");
const menu = document.getElementById("Menu");
const closeBtn = document.getElementById("Menu_Close_Button");
const menuItems = document.getElementById("Menu_Items");

const toggle = document.getElementById("Change_Theme");
const icon = document.getElementById("Theme_Emoji");
const logo = document.getElementById("Logo");

// ========== Navigation Links ==========

const links = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Contact", href: "#contact" }
];

links.forEach(link => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.text;
    listItem.appendChild(anchor);
    menuItems.appendChild(listItem);
});

// ========== Menu Toggle Handlers ==========

menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
});

// ========== Theme Toggle Handler ==========

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    icon.textContent = toggle.checked ? " " : " ";
    logo.src = toggle.checked ? "../Images/Logo_Dark.png" : "../Images/Logo_Yellow.png";
});
