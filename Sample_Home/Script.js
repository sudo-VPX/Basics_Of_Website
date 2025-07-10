// =================================================================================| Header |=================================================================================

// ========== Element References ==========

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("Menu_Button");
    const menu = document.getElementById("Menu");
    const closeBtn = document.getElementById("Menu_Close_Button");
    const menuItems = document.getElementById("Menu_Items");

    const toggle = document.getElementById("Change_Theme");
    const logo = document.getElementById("Logo");

    // ========== Navigation Links ==========

    const links = [
        { text: "Home", href: "#home" },
        { text: "Shop", href: "#shop" },
        { text: "All Services", href: "#all_services" },
        { text: "Study", href: "#study" },
        { text: "About", href: "#about" },
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

    // ========== Theme Color Meta Update ==========

    function updateThemeColor(isDark) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', isDark ? '#121212' : '#ffffff');
    }

    // ========== System Theme Detection ==========

    function applySystemTheme() {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.body.classList.toggle("dark-mode", isDark);
        toggle.checked = isDark;
        logo.src = isDark ? "../Images/Logo_Dark.png" : "../Images/Logo_Yellow.png";
        updateThemeColor(isDark);
    }

    applySystemTheme();

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemTheme);

    // ========== Theme Toggle Handler ==========

    toggle.addEventListener("change", () => {
        const isDark = toggle.checked;
        document.body.classList.toggle("dark-mode", isDark);
        logo.src = isDark ? "../Images/Logo_Dark.png" : "../Images/Logo_Yellow.png";
        updateThemeColor(isDark);
    });
});

// ========== Main Entrance Fade Out ==========

window.addEventListener("load", () => {
    setTimeout(() => {
        const intro = document.getElementById("Main_Entrance");
        intro.classList.add("fade-out");
        setTimeout(() => {
            intro.remove();
        }, 1000);
    }, 3500);
});

// =================================================================================| Cards |=================================================================================

// ========== No Of Crads ==========

const Card_1 = document.getElementById("Card_1");
const Card_2 = document.getElementById("Card_2");
const Card_3 = document.getElementById("Card_3");
const Card_4 = document.getElementById("Card_4");
const Card_5 = document.getElementById("Card_5");
const Card_6 = document.getElementById("Card_6");
const Card_7 = document.getElementById("Card_7");
const Card_8 = document.getElementById("Card_8");

// ========== Crads Scrolling Animation ==========

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.75;

    const Card_1_Top = Card_1.getBoundingClientRect().top;
    const Card_2_Top = Card_2.getBoundingClientRect().top;
    const Card_3_Top = Card_3.getBoundingClientRect().top;
    const Card_4_Top = Card_4.getBoundingClientRect().top;
    const Card_5_Top = Card_5.getBoundingClientRect().top;
    const Card_6_Top = Card_6.getBoundingClientRect().top;
    const Card_7_Top = Card_7.getBoundingClientRect().top;
    const Card_8_Top = Card_8.getBoundingClientRect().top;


    // ========== Crad 1 Scrolling Animation ==========

    if (Card_1_Top < triggerBottom && Card_1_Top > 100) {
        Card_1.classList.add("card-visible");
        Card_1.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (Card_1_Top <= 100) {
        Card_1.classList.add("card-exit-left");
        Card_1.classList.remove("card-visible");
    } else {
        Card_1.classList.add("Card_Scroll_Animation_Right_To_Left");
        Card_1.classList.remove("card-visible", "card-exit-left");
    }

    // ========== Crad 2 Scrolling Animation ==========

    if (Card_2_Top < triggerBottom && Card_2_Top > 100) {
        Card_2.classList.add("card-visible");
        Card_2.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (Card_2_Top <= 100) {
        Card_2.classList.add("card-exit-right");
        Card_2.classList.remove("card-visible");
    } else {
        Card_2.classList.add("Card_Scroll_Animation_Left_To_Right");
        Card_2.classList.remove("card-visible", "card-exit-right");
    }

    // ========== Crad 3 Scrolling Animation ==========

    if (Card_3_Top < triggerBottom && Card_3_Top > 100) {
        Card_3.classList.add("card-visible");
        Card_3.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (Card_3_Top <= 100) {
        Card_3.classList.add("card-exit-left");
        Card_3.classList.remove("card-visible");
    } else {
        Card_3.classList.add("Card_Scroll_Animation_Right_To_Left");
        Card_3.classList.remove("card-visible", "card-exit-left");
    }

    // ========== Crad 4 Scrolling Animation ==========

    if (Card_4_Top < triggerBottom && Card_4_Top > 100) {
        Card_4.classList.add("card-visible");
        Card_4.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (Card_4_Top <= 100) {
        Card_4.classList.add("card-exit-right");
        Card_4.classList.remove("card-visible");
    } else {
        Card_4.classList.add("Card_Scroll_Animation_Left_To_Right");
        Card_4.classList.remove("card-visible", "card-exit-right");
    }

    // ========== Crad 5 Scrolling Animation ==========

    if (Card_5_Top < triggerBottom && Card_5_Top > 100) {
        Card_5.classList.add("card-visible");
        Card_5.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (Card_5_Top <= 100) {
        Card_5.classList.add("card-exit-left");
        Card_5.classList.remove("card-visible");
    } else {
        Card_5.classList.add("Card_Scroll_Animation_Right_To_Left");
        Card_5.classList.remove("card-visible", "card-exit-left");
    }

    // ========== Crad 6 Scrolling Animation ==========

    if (Card_6_Top < triggerBottom && Card_6_Top > 100) {
        Card_6.classList.add("card-visible");
        Card_6.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (Card_6_Top <= 100) {
        Card_6.classList.add("card-exit-right");
        Card_6.classList.remove("card-visible");
    } else {
        Card_6.classList.add("Card_Scroll_Animation_Left_To_Right");
        Card_6.classList.remove("card-visible", "card-exit-right");
    }

    // ========== Crad 7 Scrolling Animation ==========

    if (Card_7_Top < triggerBottom && Card_7_Top > 100) {
        Card_7.classList.add("card-visible");
        Card_7.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (Card_7_Top <= 100) {
        Card_7.classList.add("card-exit-left");
        Card_7.classList.remove("card-visible");
    } else {
        Card_7.classList.add("Card_Scroll_Animation_Right_To_Left");
        Card_7.classList.remove("card-visible", "card-exit-left");
    }

    // ========== Crad 8 Scrolling Animation ==========

    if (Card_8_Top < triggerBottom && Card_8_Top > 100) {
        Card_8.classList.add("card-visible");
        Card_8.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (Card_8_Top <= 100) {
        Card_8.classList.add("card-exit-right");
        Card_8.classList.remove("card-visible");
    } else {
        Card_8.classList.add("Card_Scroll_Animation_Left_To_Right");
        Card_8.classList.remove("card-visible", "card-exit-right");
    }
}

// ========== All Card Scrolling Animation ==========

window.addEventListener("DOMContentLoaded", () => {
    Card_1.classList.add("Card_Scroll_Animation_Right_To_Left");
    Card_2.classList.add("Card_Scroll_Animation_Left_To_Right");
    Card_3.classList.add("Card_Scroll_Animation_Right_To_Left");
    Card_4.classList.add("Card_Scroll_Animation_Left_To_Right");
    Card_5.classList.add("Card_Scroll_Animation_Right_To_Left");
    Card_6.classList.add("Card_Scroll_Animation_Left_To_Right");
    Card_7.classList.add("Card_Scroll_Animation_Right_To_Left");
    Card_8.classList.add("Card_Scroll_Animation_Left_To_Right");
    checkScroll();
});

window.addEventListener("scroll", checkScroll);

// =================================================================================| Footer |=================================================================================

// ========== Quick Links Data ==========

const quickLinksData = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
];

// ========== Quick Links JS ==========

document.addEventListener("DOMContentLoaded", () => {
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
    if (placeholder) {
        placeholder.replaceWith(quickLinksSection);
    } else {
        console.error("Element with id 'QuickLinks' not found.");
    }
});