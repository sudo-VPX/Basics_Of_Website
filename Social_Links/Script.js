// Under Development File

const links = [
    {
        name: "YouTube",
        url: "https://youtube.com/@YourChannel",
        image: "../Images/YouTube_Logo.png",
        subtitle: "YourChannel",
        platform: "youtube"
    },
    {
        name: "InstaGram",
        url: "https://instagram.com/yourhandle",
        image: "../Images/InstaGram_Logo.png",
        subtitle: "@yourhandle",
        platform: "instagram"
    },
    {
        name: "GitHub",
        url: "https://github.com/sudo-VPX",
        image: "../Images/GitHub_Logo.png",
        subtitle: "sudo-VPX",
        platform: "github"
    },
    {
        name: "FaceBook",
        url: "https://facebook.com/yourprofile",
        image: "../Images/Facebook_Logo.png",
        subtitle: "YourProfile",
        platform: "facebook"
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/1234567890",
        image: "../Images/WhatsApp_Logo.png",
        subtitle: "+1234567890",
        platform: "whatsapp"
    },
    {
        name: "TeleGram",
        url: "https://t.me/yourhandle",
        image: "../Images/Telegram_Logo.png",
        subtitle: "@yourhandle",
        platform: "telegram"
    },
    {
        name: "GMail",
        url: "mailto:youremail@gmail.com",
        image: "../Images/GMail_Logo.png",
        subtitle: "youremail@gmail.com",
        platform: "gmail"
    },
    {
        name: "Discord",
        url: "https://discord.gg/yourserver",
        image: "../Images/Discord_Logo.png",
        subtitle: "YourServer",
        platform: "discord"
    },
    {
        name: "x",
        url: "https://twitter.com/yourhandle",
        image: "../Images/x_Logo.png",
        subtitle: "@yourhandle",
        platform: "x"
    },
    {
        name: "Threads",
        url: "https://threads.net/@yourhandle",
        image: "../Images/Threads_Logo.png",
        subtitle: "@yourhandle",
        platform: "threads"
    },
];

const container = document.getElementById("All_Social_Links");

links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.className = "Links";
    a.setAttribute("data-platform", link.platform);

    const img = document.createElement("img");
    img.src = link.image;
    img.alt = `${link.name} icon`;
    img.className = "Social_Link_Image";

    const textDiv = document.createElement("div");
    textDiv.className = "Social_Link_Texts";
    textDiv.innerHTML = `
    <span class="Social_Title">${link.name}</span>
    <span class="Social_Subtitle">${link.subtitle}</span>
  `;

    a.appendChild(img);
    a.appendChild(textDiv);

    // Hover effect to change body background based on platform
    a.addEventListener("mouseenter", () => {
        document.body.classList.add(`hover-${link.platform}`);
    });

    a.addEventListener("mouseleave", () => {
        document.body.classList.remove(`hover-${link.platform}`);
    });

    container.appendChild(a);
});
