const subjects = [
    {
        title: "CSE",
        description: "Explore How To Talk With Machine",
        icon: "💻",
        link: "https://sudo-vpx.github.io/Basics_Of_Website/Study/CSE/"
    },
    {
        title: "Comming Soon",
        description: "Contact Our Team For a Particular Subject",
        icon: "⏳",
        link: null
    }
];

const section = document.getElementById('Study_Section');

subjects.forEach(subject => {
    const box = document.createElement('div');
    box.className = 'Subject_Box';

    box.innerHTML = `
    <div class="Subject_Icon">${subject.icon}</div>
    <h2>${subject.title}</h2>
    <p>${subject.description}</p>
  `;

    if (subject.link) {
        box.addEventListener('click', () => {
            window.location.href = subject.link;
        });
    } else {
        box.classList.add('disabled');
    }

    section.appendChild(box);
});
