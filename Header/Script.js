// ===================================== Licence Given By VPX - JS =====================================
//
//
// Licence is Given To - [Your User Name]
// Place Where Code is Used - [Where You Are Using This Code]
// Licence is Given By - VPX
// Any Price For Licence - No
// Permissoin To use File - https://github.com/sudo-VPX/Basics_Of_Website/tree/main/Header/Script.js
// How File Looks or OutPut - https://sudo-VPX.github.io/Basics_Of_Website/Header
// [Why Need Licence - Describe Your Problem , Optional]
//
// Note - the Text With []  is Only Text Can Be Changed or Removed By User who is Using This Code in Licence Only 
//
// Vaid Till - Check Validity on github.com/sudo-VPX under That Go to SECURITY.md section Check There
// To Direct Click Licence then Click To https://github.com/sudo-VPX/Basics_Of_Website/blob/main/SECURITY.md
//
// This File is Made By =======>  Vikrant Pathania or sudo-VPX
//
//
//  ======================================= Thank You For Your Time =======================================

// === Element References ===
const menuBtn = document.getElementById("Menu_Button");
const menu = document.getElementById("Menu");
const closeBtn = document.getElementById("Menu_Close_Button");
const menuItems = document.getElementById("Menu_Items");

const toggle = document.getElementById("Change_Theme");
const icon = document.getElementById("Theme_Emoji");
const logo = document.getElementById("Logo");

// === Navigation Links ===
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

// === Menu Toggle Handlers ===
menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
});

// === Theme Toggle Handler ===
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    icon.textContent = toggle.checked ? " " : " ";
    logo.src = toggle.checked ? "../Images/Logo_Dark.png" : "../Images/Logo_Yellow.png";
});
