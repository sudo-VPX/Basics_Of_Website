const subjects = [
  {
    title: "CSE",
    description: "Explore How To Talk With Machine",
    icon: "💻",
    link: "/CSE"
  },
  {
    title: "Math",
    description: "Explore How To Understad Universe",
    icon: "➗",
    link: "/Math"
  },
  {
    title: "Physics",
    description: "Explore Laws Of Universe",
    icon: "⚛️",
    link: "/Physics"
  },
  {
    title: "Chemistry",
    description: "Explore How Atoms Behave",
    icon: "🧪",
    link: "/Chemistry"
  },
  {
    title: "Biology",
    description: "Explore How Life Works In This Universe",
    icon: "🧬",
    link: "/Biology"
  },
  {
    title: "Books Summary",
    description: "Get Short Notes On Many Books",
    icon: "📚",
    link: "/Book_Summary"
  },
  {
    title: "Other Subjects - Comming Soon",
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
