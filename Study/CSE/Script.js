const topics = [
  {
    title: "Topic 1",
    description: "About Topic 1",
    icon: "📘",
    link: "topic1.html"
  },
  {
    title: "Topic 2",
    description: "About Topic 2",
    icon: "📗",
    link: "topic2.html"
  },
  {
    title: "Other Topics - Comming Soon",
    description: "Contact Our Team For a Particular Topic",
    icon: "⏳",
    link: null
  }
];

const section = document.getElementById('Study_Section');

topics.forEach(topic => {
  const box = document.createElement('div');
  box.className = 'Subject_Box';

  box.innerHTML = `
    <div class="Subject_Icon">${topic.icon}</div>
    <h2>${topic.title}</h2>
    <p>${topic.description}</p>
  `;

  if (topic.link) {
    box.addEventListener('click', () => {
      window.location.href = topic.link;
    });
  } else {
    box.classList.add('disabled');
  }

  section.appendChild(box);
});
