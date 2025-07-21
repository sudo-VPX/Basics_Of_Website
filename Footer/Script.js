// ========== Quick Links Data ==========

const quickLinksData = [
    { name: "Home", href: "#home" },
    { name: "Study", href: "#study" },
    { name: "Shop", href: "#shop" },
    { name: "All Services", href: "#all_services" },
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
        console.error("Little Error For Quick Links , Contact Team For This");
    }
});