// ===================================== Licence Given By VPX - JS =====================================
//
//
// Licence is Given To - [Your User Name]
// Place Where Code is Used - [Where You Are Using This Code]
// Licence is Given By - VPX
// Any Price For Licence - No
// Permissoin To use File - https://github.com/sudo-VPX/Basics_Of_Website/tree/main/Footer/Script.js
// How File Looks or OutPut - https://sudo-VPX.github.io/Basics_Of_Website/Footer
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
// ======================================= Thank You For Your Time =======================================

document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = document.body.classList.contains("dark-mode");
    console.log(`Dark Mode: ${isDarkMode}`);

    const quickLinksData = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" }
    ];

    const quickLinksSection = document.createElement("div");
    quickLinksSection.classList.add("Footer_Sub_Box", "QuickLinks");

    const heading = document.createElement("h2");
    heading.textContent = "Quick Links";

    const list = document.createElement("ul");
    quickLinksData.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.name;
        li.appendChild(a);
        list.appendChild(li);
    });

    quickLinksSection.appendChild(heading);
    quickLinksSection.appendChild(list);

    const placeholder = document.getElementById("QuickLinks");
    placeholder.replaceWith(quickLinksSection);
});