const SITE_DATA = {

  // ---- CERTIFICATIONS ----
  // status: "verified" or "progress"
  // file: path to the certificate PDF (opens in a new tab when the card is clicked)
  certifications: [
    { id: "CERT-01", name: "Google Cybersecurity Professional", issuer: "Google / Coursera", year: "2026", status: "verified", file: "assets/certificates/google-cybersecurity-professional.pdf" },
    { id: "CERT-02", name: "Ethical Hacker", issuer: "Cisco Networking Academy", year: "2025", status: "verified", file: "assets/certificates/ethical-hacker.pdf" },
    { id: "CERT-03", name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", year: "2024", status: "verified", file: "assets/certificates/ccna-introduction-to-networks.pdf" },
    { id: "CERT-04", name: "Cyber Threat Management", issuer: "Cisco Networking Academy", year: "2026", status: "verified", file: "assets/certificates/cyber-threat-management.pdf" },
    { id: "CERT-05", name: "Endpoint Security", issuer: "Cisco Networking Academy", year: "2024", status: "verified", file: "assets/certificates/endpoint-security.pdf" },
    { id: "CERT-06", name: "Network Support and Security", issuer: "Cisco Networking Academy", year: "2025", status: "verified", file: "assets/certificates/network-support-and-security.pdf" },
    { id: "CERT-07", name: "Network Defense", issuer: "Cisco Networking Academy", year: "2025", status: "verified", file: "assets/certificates/network-defense.pdf" },
    { id: "CERT-08", name: "Linux Essentials", issuer: "Cisco Networking Academy", year: "2025", status: "verified", file: "assets/certificates/linux-essentials.pdf" },
    { id: "CERT-09", name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2024", status: "verified", file: "assets/certificates/introduction-to-cybersecurity.pdf" },
    { id: "CERT-10", name: "Operating Systems Basics", issuer: "Cisco Networking Academy", year: "2025", status: "verified", file: "assets/certificates/operating-systems-basics.pdf" },
    { id: "CERT-11", name: "Industrial Cybersecurity Essentials", issuer: "Cisco Networking Academy", year: "2026", status: "verified", file: "assets/certificates/industrial-cybersecurity-essentials.pdf" },
    { id: "CERT-12", name: "Programming Essentials in C++", issuer: "Cisco Networking Academy", year: "2024", status: "verified", file: "assets/certificates/programming-essentials-cpp.pdf" },
    { id: "CERT-13", name: "C++ Advanced", issuer: "Cisco Networking Academy", year: "2024", status: "verified", file: "assets/certificates/cpp-advanced.pdf" },
    { id: "CERT-14", name: "Python Essentials 1", issuer: "Cisco Networking Academy", year: "2026", status: "verified", file: "assets/certificates/python-essentials-1.pdf" },
    { id: "CERT-15", name: "Python Essentials 2", issuer: "Cisco Networking Academy", year: "2026", status: "verified", file: "assets/certificates/python-essentials-2.pdf" }
  ],

  findings: [
    {
      id: "FND-01", year: "2026", category: "bugbounty",
      title: "NADRA Bug Bounty 2026",
      desc: "Participated in NADRA's public bug bounty program, testing production systems for real-world, exploitable vulnerabilities.",
      tags: ["Bug Bounty", "VAPT"], link: "#"
    },
    {
      id: "FND-02", year: "2026", category: "ctf",
      title: "Cyber Infinity CTF — 2nd Place",
      desc: "Placed 2nd in the Cyber Infinity Capture the Flag competition hosted by Riphah International University.",
      tags: ["CTF", "Competitive"], link: "#"
    }
  ],

  categoryLabels: {
    bugbounty: "Bug Bounty",
    ctf: "CTF",
    ad: "Active Directory",
    web: "Web"
  },

  // ---- TOOLS / PROJECTS ----
  tools: [
    {
      icon: "&#128269;", name: "ForensicEye",
      desc: "Windows digital forensics tool built in Python to collect, parse, and correlate browser and USB artifacts across 24+ browsers. Includes unified timeline correlation, rule-based suspicious-activity triage, SHA-256/MD5 evidence hashing with chain-of-custody logging, and automated CSV/HTML report export for case review.",
      link: "https://github.com/Shahab-Qamar"
    },
    {
      icon: "&#128737;", name: "Privacy Guard",
      desc: "Browser security extension that monitors sensitive permissions — camera, microphone, geolocation, notifications — with real-time alerts and timestamped activity logs. Adds active defenses including camera black-screen spoofing and geolocation spoofing against malicious sites.",
      link: "https://github.com/Shahab-Qamar"
    },
    {
      icon: "&#11088;", name: "Secure Downloader Extension",
      desc: "Browser extension for real-time link scanning and safe downloads using the VirusTotal API. Surfaces detailed threat reports and automatically blocks malicious downloads before they complete.",
      link: "https://github.com/Shahab-Qamar"
    },
    {
      icon: "&#128449;", name: "DCT Steganography Tool",
      desc: "Steganography tool using Discrete Cosine Transform to embed large amounts of data inside images while preserving visual quality, making the hidden payload difficult to detect.",
      link: "https://github.com/Shahab-Qamar"
    }
  ],

  // ---- EXPERIENCE TIMELINE (most recent first) ----
  timeline: [
    {
      date: "2026 — PRESENT", role: "IT & Cybersecurity Intern, NASTP Rawalpindi",
      desc: "Deploying and configuring Wazuh agents across endpoints for centralized SIEM log monitoring and threat detection. Main focus on web application penetration testing — identifying, validating, and reporting vulnerabilities against OWASP-aligned methodology."
    },
    {
      date: "AUG 2025 — MAY 2026", role: "Teaching Assistant, Riphah International University",
      desc: "Assisted 55+ students with hands-on labs for Application of ICT (Fall 2025) and 40+ students for Information Security (Spring 2026)."
    },
    {
      date: "JUL 2025 — SEP 2025", role: "Cyber Security Intern, Developers Hub Corporation",
      desc: "Conducted web application security assessments across multiple client applications; discovered and remediated 10+ vulnerabilities including XSS, SQL injection, and CSRF. Hardened API security with rate limiting, CORS policies, JWT authentication, bcrypt password hashing, and CSRF protection using Node.js and Helmet."
    },
    {
      date: "ONGOING", role: "Red Team Instructor Support, Cyberster Internship Program",
      desc: "Supporting and guiding interns through red team internship tasks as part of the Cyberster program."
    }
  ],

  terminalLines: [
    { type: "cmd", text: "whoami" },
    { type: "out", text: "zerox" },
    { type: "cmd", text: "cat mission.txt" },
    { type: "out", text: "VAPT, web app security, and digital forensics.\nRed team by focus, blue team by curiosity." },
    { type: "cmd", text: "./init_dossier.sh" },
    { type: "ok",  text: "[OK] loading engagements..." },
    { type: "ok",  text: "[OK] loading writeups..." },
    { type: "ok",  text: "[OK] status: TLP:CLEAR" }
  ]
};
