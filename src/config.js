// ═══════════════════════════════════════════════════════════════
//  🛠  EDIT THIS FILE TO UPDATE YOUR SITE
//  To update resume: replace public/resume.pdf (keep same name)
//  Then commit & push — GitHub Actions redeploys automatically.
// ═══════════════════════════════════════════════════════════════

const config = {

  // ── Identity ─────────────────────────────────────────────────
  name:    "Prashast Vats",
  title:   "Software Engineer",
  tagline: "I build AI tools, automation systems, and full-stack apps that make teams more productive.",

  // ── Contact ──────────────────────────────────────────────────
  location: "Bangalore, India",
  email:    "prashastvats@gmail.com",
  phone:    "+91 6363140535",
  github:   "https://github.com/PrashastVats1",
  linkedin: "",

  // ── Resume ───────────────────────────────────────────────────
  resumeFile: process.env.PUBLIC_URL + "/resume.pdf",

  // ── Hero stats ───────────────────────────────────────────────
  stats: [
    { value: "2+",  label: "Years Experience" },
    { value: "🏆",  label: "Competition Winner" },
    { value: "80%", label: "Support Resolution" },
    { value: "30+", label: "Engineers Supported" },
  ],

  // ── Featured Projects ─────────────────────────────────────────
  featuredProjects: [
    {
      badge:     "🏆 2nd Place — Internal Competition",
      name:      "AI Engineer Onboarding Chatbot",
      challenge: "New engineers took weeks to learn the internal automation framework, slowing down team velocity.",
      solution:  "Built a conversational AI chatbot with script explanation, syntax guidance, and automated code generation.",
      impact: [
        "Placed 2nd out of 8 developers in internal competition",
        "Significantly reduced new engineer ramp-up time",
        "Adopted for onboarding across the team",
      ],
      tags:   ["Copilot AI", "C#", ".NET", "Prompt Engineering"],
      github: "",
      demo:   "",
    },
    {
      badge:     "💰 Cost Optimisation",
      name:      "Custom Computer Vision Model",
      challenge: "Cloud AI costs were scaling with usage and the system required internet connectivity for UI detection.",
      solution:  "Trained a custom ResNet + FAISS model to identify UI elements in enterprise interfaces — fully on-premise.",
      impact: [
        "Eliminated per-request cloud AI costs entirely",
        "Works fully offline with no external dependencies",
        "Integrated into production automation workflows",
      ],
      tags:   ["Python", "ResNet", "FAISS", "Computer Vision"],
      github: "",
      demo:   "",
    },
    {
      badge:     "🔧 Internal Tool",
      name:      "Network Printer Diagnostic Tool",
      challenge: "Diagnosing and upgrading firmware across a fleet of network printers was a slow, manual process.",
      solution:  "Built a full-stack .NET MVC web app to scan, diagnose, and visualise printer states with automated firmware upgrades.",
      impact: [
        "Automated previously manual diagnostics workflow",
        "Visualised printer fleet state in real time",
        "Reduced firmware upgrade time significantly",
      ],
      tags:   [".NET MVC", "C#", "Selenium", "SQL Server"],
      github: "",
      demo:   "",
    },
  ],

  // ── Skills ───────────────────────────────────────────────────
  skills: [
    { icon: "</>", category: "Languages",              items: ["C#", "JavaScript", "TypeScript", "HTML5", "CSS3", "Python"] },
    { icon: "⚙",  category: "Frameworks & Libraries", items: [".NET Framework", "ASP.NET MVC", ".NET Core", "React", "Angular", "ADO.NET"] },
    { icon: "🗄",  category: "Databases",              items: ["Microsoft SQL Server", "MariaDB", "MongoDB"] },
    { icon: "🔧",  category: "Tools & Platforms",      items: ["Visual Studio", "JIRA", "Git", "Selenium", "Figma"] },
    { icon: "🤖",  category: "AI / ML",                items: ["Prompt Engineering", "Custom Chatbot Dev", "Computer Vision", "ResNet", "FAISS"] },
    { icon: "★",   category: "Specializations",        items: ["Plugin Architecture", "Technical Support", "Automation Testing", "Full-Stack Web"] },
  ],

  // ── Key Highlights ───────────────────────────────────────────
  highlights: [
    { icon: "🏆", title: "Competition Winner",       text: "Built an AI onboarding chatbot that placed 2nd in an 8-developer internal competition, now used for team onboarding." },
    { icon: "💰", title: "Cost Optimisation",        text: "Replaced cloud AI with a custom on-premise computer vision model, eliminating per-request costs entirely." },
    { icon: "🌍", title: "European Expansion",       text: "Contributed to the company's first European client engagement, resulting in a continued partnership and lab setup." },
    { icon: "⚡", title: "20% Faster Workflows",     text: "Delivered automation scripts and analytics that improved client performance measurement by 20%." },
    { icon: "👥", title: "30+ Engineers Supported",  text: "Primary technical contact for a global QA team, maintaining 80% first-contact resolution across 3 time zones." },
    { icon: "🔧", title: "Full-Stack Tooling",       text: "Built end-to-end diagnostic and automation tools used in production environments by engineering teams daily." },
  ],

  // ── Work Experience ──────────────────────────────────────────
  // HP info kept generic — internal tool/platform names removed per NDA best practice
  experience: [
    {
      role:     "Software Engineer",
      company:  "Mphasis Ltd.",
      period:   "May 2023 – Present",
      location: "Bangalore, India",
      projects: [
        {
          name:    "Firmware Test Automation — Plugin Dev & Support",
          period:  "Mar 2025 – Present",
          summary: "Technical point of contact for 30+ QA engineers on an enterprise firmware testing platform, maintaining 80% first-contact resolution. Built test automation plugins, a custom computer vision model replacing cloud AI for UI detection, and an AI onboarding chatbot that placed 2nd in an internal competition.",
          tags:    ["C#", ".NET", "Python", "Computer Vision", "AI Chatbot"],
        },
        {
          name:    "Print Automation — European Client Engagement",
          period:  "Nov 2024 – Feb 2025",
          summary: "Collaborated with a European client team to deliver printer performance automation via scripts and MariaDB-backed analytics, achieving 20% faster measurement. Contributed to the company's first European engagement, leading to a continued partnership and on-premise lab setup.",
          tags:    ["Python", "MariaDB", "Automation", "Client Delivery"],
        },
        {
          name:    "Network Printer Diagnostic Tool",
          period:  "Feb 2024 – Jun 2024",
          summary: "Built a full-stack .NET MVC web application to scan and diagnose network printers, visualise device states in real time, and automate firmware upgrades using Selenium — handling frontend and backend development end-to-end.",
          tags:    [".NET MVC", "Selenium", "SQL Server", "C#"],
        },
      ],
    },
  ],

  // ── Education ────────────────────────────────────────────────
  education: [
    {
      degree:      "B.Tech — Electronics & Instrumentation Engineering",
      institution: "Manipal Institute of Technology",
      period:      "2018 – 2022",
      gpa:         "CGPA 7.06",
    },
  ],

  // ── Certifications ───────────────────────────────────────────
  certifications: [
    { label: "React.js, Angular 10, TypeScript, SQL, HTML5/CSS3, Git, GitHub Copilot", issuer: "TalentNext · Mphasis" },
    { label: "Artificial Intelligence", issuer: "SmartKnower" },
    { label: "Interactive Python",      issuer: "Coursera" },
    { label: "UX Design",               issuer: "Coursera" },
  ],

  // ── Achievements ─────────────────────────────────────────────
  achievements: [
    { icon: "🥈", text: "2nd Place — 132nd International MUN (2022)" },
    { icon: "🏆", text: "Top 5 — TCS Techbytes Regional Quiz (2021)" },
    { icon: "🤖", text: "Core Member — Team Combat Robotics, Manipal (2019–2021)" },
    { icon: "🌿", text: "Swachh Bharat NGO Outreach & College Fest Operations" },
  ],

  // ── Blog ─────────────────────────────────────────────────────
  // Add your posts here. Leave empty array [] to show placeholder cards.
  // blogUrl: link to your full blog (Dev.to, Medium, etc.)
  blogUrl: "",  // e.g. "https://dev.to/prashastvats"
  blogPosts: [
    // Uncomment and fill in when you publish posts:
    // {
    //   tag:      "AI",
    //   title:    "Your post title",
    //   excerpt:  "A short 1-2 sentence description of what the post is about.",
    //   date:     "Feb 2026",
    //   readTime: "5 min read",
    //   url:      "https://dev.to/yourpost",
    // },
  ],

};

export default config;
