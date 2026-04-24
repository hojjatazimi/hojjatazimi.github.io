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
    {
      label: "UCI Email",
      href: "mailto:hazimias@uci.edu",
      icon: "email"
    },
    {
      label: "Personal Email",
      href: "mailto:hojjatazimi2@gmail.com",
      icon: "email"
    },
    {
      label: "GitHub",
      href: "https://github.com/hojjatazimi",
      icon: "github"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hojjat-azimi-asrari-85a65a105/",
      icon: "linkedin"
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0001-6520-749X",
      icon: "orcid"
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=-QSO73QAAAAJ&hl=en",
      icon: "scholar"
    }
  ]
};

const icons = {
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6.5h16v11H4z" fill="none" stroke="currentColor" stroke-width="1.7"/>
      <path d="M5 8l7 5 7-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.56c.43.08.58-.18.58-.41v-1.46c-2.35.5-2.85-1-2.85-1-.39-.97-.95-1.22-.95-1.22-.78-.54.06-.53.06-.53.86.06 1.31.88 1.31.88.77 1.31 2.01.93 2.5.71.08-.56.3-.93.55-1.14-1.88-.21-3.86-.94-3.86-4.17 0-.92.33-1.68.87-2.27-.09-.21-.38-1.07.08-2.23 0 0 .71-.23 2.33.87a8.2 8.2 0 0 1 4.24 0c1.62-1.1 2.33-.87 2.33-.87.46 1.16.17 2.02.08 2.23.54.59.87 1.35.87 2.27 0 3.24-1.99 3.95-3.89 4.16.31.27.58.79.58 1.6v2.38c0 .23.15.5.59.41A8.5 8.5 0 0 0 12 3.5Z" fill="currentColor"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.2 8.2a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm-1.2 2.1h2.4V19H5Zm5.1 0h2.3v1.2h.03c.32-.6 1.1-1.4 2.27-1.4 2.43 0 2.88 1.6 2.88 3.67V19h-2.4v-4.65c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.77 1.2-1.77 2.44V19H10.1Z" fill="currentColor"/>
    </svg>
  `,
  orcid: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/>
      <path d="M8.2 8.5h1.6v7H8.2zM9 7.2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm3 .9h2.6c2.3 0 3.8 1.4 3.8 3.5S16.9 15 14.7 15H12Zm1.6 5.4h.9c1.47 0 2.35-.65 2.35-1.95 0-1.28-.9-1.95-2.35-1.95h-.9Z" fill="currentColor"/>
    </svg>
  `,
  scholar: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 4 9 5-9 5-9-5 9-5Z" fill="currentColor"/>
      <path d="M7 12.4V16c0 1.7 2.24 3 5 3s5-1.3 5-3v-3.6l-5 2.78Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
  `
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
        <article class="note-card">
          <div>
            <div class="note-header">
              <h3>${note.title}</h3>
              <span class="project-tag">${note.date}</span>
            </div>
            <p>${note.description}</p>
          </div>
          <div class="project-links">
            <a class="inline-link" href="${note.href}" target="_blank" rel="noreferrer">${note.linkLabel}</a>
          </div>
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
    .map(
      (item) => `
        <a class="inline-link contact-link" href="${item.href}" target="_blank" rel="noreferrer">
          <span class="contact-icon">${icons[item.icon] || ""}</span>
          <span>${item.label}</span>
        </a>
      `
    )
    .join("");
}

renderResearch();
renderPublicationList();
renderTeaching();
renderContacts();
