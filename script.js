const siteContent = {
  research: [
    {
      title: "NERD Model for Decoded Neurofeedback",
      tag: "PhD thesis",
      description:
        "Developed Noise Estimation through Reinforcement-based Diffusion, a generative AI framework that models higher-order neural representations of uncertainty in decoded neurofeedback fMRI tasks.",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2503.14333" }
      ]
    },
    {
      title: "Multimodal Human-Subject Experiments",
      tag: "2022-2025",
      description:
        "Designed visual and memory tasks and collected EEG, fNIRS, eye gaze, heart rate, and skin conductance data from more than 50 participants to study cognition and self-regulation.",
      links: [
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "AI and Neurofeedback at Ruby Neurotech",
      tag: "Industry collaboration",
      description:
        "Designed real-time human-subject interaction tasks for mental health neurofeedback, built behavioral signal pipelines, and collaborated with neuroscientists and engineers on Wellcome Leap-funded work.",
      links: [
        { label: "Email me", href: "mailto:hazimias@uci.edu" }
      ]
    }
  ],
  publications: [
    {
      title: "How brains build higher order representations of uncertainty",
      date: "2026",
      description:
        "Peters, M. A. K., & Azimi Asrari, H. Philosophy and the Mind Sciences, 7(1).",
      href: "https://doi.org/10.33735/phimisci.2026.12269",
      linkLabel: "View article"
    },
    {
      title: "Revealing higher-order neural representations of uncertainty with the NERD model",
      date: "2025",
      description:
        "Azimi Asrari, H., & Peters, M. A. K. arXiv preprint arXiv:2503.14333.",
      href: "https://arxiv.org/abs/2503.14333",
      linkLabel: "View on arXiv"
    },
    {
      title: "Diffusion models and reinforcement learning for decoded fMRI neurofeedback",
      date: "2024",
      description:
        "Azimi Asrari, H., & Peters, M. A. K. Proceedings of the Cognitive Computational Neuroscience Meeting 2024.",
      href: "https://2024.ccneuro.org/pdf/431_Paper_authored_authored.pdf",
      linkLabel: "Open PDF"
    }
  ],
  teaching: [
    {
      title: "Neural Data Analysis",
      date: "UC Irvine, Fall 2025",
      description:
        "Invited lecturer delivering sessions on neural data analysis techniques."
    },
    {
      title: "Neural Data Analysis",
      date: "UC Irvine, Fall 2024",
      description:
        "Invited lecturer covering methods and practical analysis workflows."
    },
    {
      title: "Computational Neuroscience",
      date: "Neuromatch Academy, Summer 2020",
      description:
        "Teaching assistant supporting a large international cohort in computational neuroscience."
    },
    {
      title: "Statistics and Computer Science Instruction",
      date: "2016-2020",
      description:
        "Teaching assistant for Statistical Inference, Data Structures, and Theory of Languages and Automata."
    }
  ],
  contacts: [
    { label: "UCI Email", href: "mailto:hazimias@uci.edu" },
    { label: "Personal Email", href: "mailto:hojjatazimi2@gmail.com" },
    { label: "GitHub", href: "https://github.com/hojjatazimi" }
  ]
};

function makeLink(label, href) {
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  const targetAttrs = isExternal ? ' target="_blank" rel="noreferrer"' : "";

  return `<a class="inline-link" href="${href}"${targetAttrs}>${label}</a>`;
}

function renderResearch() {
  const projectGrid = document.querySelector("#research-grid");

  projectGrid.innerHTML = siteContent.research
    .map(
      (project) => `
        <article class="project-card">
          <div>
            <div class="project-header">
              <h3>${project.title}</h3>
              <span class="project-tag">${project.tag}</span>
            </div>
            <p>${project.description}</p>
          </div>
          <div class="project-links">
            ${project.links.map((link) => makeLink(link.label, link.href)).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderPublicationList() {
  const publicationList = document.querySelector("#publication-list");

  publicationList.innerHTML = siteContent.publications
    .map(
      (note) => `
        <article class="publication-item">
          <div class="publication-main">
            <div class="publication-header">
              <h3>${note.title}</h3>
              <span class="project-tag">${note.date}</span>
            </div>
            <p>${note.description}</p>
          </div>
          <a class="inline-link publication-link" href="${note.href}" target="_blank" rel="noreferrer">${note.linkLabel}</a>
        </article>
      `
    )
    .join("");
}

function renderTeaching() {
  const teachingGrid = document.querySelector("#teaching-grid");

  teachingGrid.innerHTML = siteContent.teaching
    .map(
      (item) => `
        <article class="note-card">
          <div class="note-header">
            <h3>${item.title}</h3>
            <span class="project-tag">${item.date}</span>
          </div>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderContacts() {
  const contactLinks = document.querySelector("#contact-links");

  contactLinks.innerHTML = siteContent.contacts
    .map((item) => makeLink(item.label, item.href))
    .join("");
}

renderResearch();
renderPublicationList();
renderTeaching();
renderContacts();
