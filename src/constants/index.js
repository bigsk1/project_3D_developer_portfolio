import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  threejs,
  voiceai,
  supacrawl,
  cfxterminal,
  podcastai,
  matrixcrypto,
  aiscreen
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "website",
    title: "Website",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Networking & AI Solutions",
    icon: mobile,
  },
  {
    title: "Docker Podman",
    icon: backend,
  },
  {
    title: "Self Hosting Home Lab",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three js",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Magento Site",
    company_name: "business owner",
    icon: python,
    iconBg: "#383E56",
    date: "March 2016 - Present",
    points: [
      "Owned an online store and hard to find good help so started learning and using CMS, PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create my own website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Homelab Networking",
    company_name: "Start Homelab journey",
    icon: python,
    iconBg: "#383E56",
    date: "Jan 2020",
    points: [
      "Developing and maintaining networking for local enviroments.",
      "Learning how to setup VLans, Firewalls, Profiles for certain network traffic.",
      "Creating VM's using proxmox and setting up Linux based headless servers.",
      "Building Servers from scratch and ensuring up time.",
    ],
  },
  {
    title: "Beginning Developer",
    company_name: "Started to learn code",
    icon: python,
    iconBg: "#383E56",
    date: "Jan 2021",
    points: [
      "Learned Docker, Docker compose and Podman.",
      "Learning Nodejs, Flask and React workflows.",
      "Built my first AI App using python, node and Open-Ai Api's.",
      "More active in Github, Gitlab and Dockerhub.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Website developement",
    icon: python,
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2024",
    points: [
      "Developing and maintaining web applications using React.",
      "Built out Jekyll blog site and post regularly about current projects working on.",
      "Building and deloying Docker based apps either cloudflare tunnels or web services.",
      "Creating Ai agents based in python and using different technologies.",
    ],
  },
  {
    title: "AI Web Apps",
    company_name: "Advanced AI Projects",
    icon: python,
    iconBg: "#383E56",
    date: "Jun 2024 - Present",
    points: [
      "Developing full-stack AI web applications with modern frontend technologies (React, Tailwind CSS, Vite).",
      "Creating open-source AI chat and audio projects integrating multiple LLM providers (OpenAI, Anthropic, Ollama).",
      "Building containerized applications with Docker for scalable and portable deployments.",
      "Implementing advanced features like speech-to-text, text-to-speech, and vision capabilities in web applications.",
    ],
  },
];

const projects = [
  {
    name: "Voice Chat AI",
    description:
      "Speak with AI - Run locally using Ollama, OpenAI or xAI - Speech uses XTTS, OpenAI or ElevenLabs",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "speech",
        color: "pink-text-gradient",
      },
    ],
    image: voiceai,
    source_code_link: "https://github.com/bigsk1/voice-chat-ai",
  },
  {
    name: "Supa Crawl Chat",
    description:
      "Integrates Supabase with Crawl4AI and AI Chat to create a powerful web crawling and semantic search solution. Streamlit supabase data visualization. Run all in Docker. API and more!",
    tags: [
      {
        name: "supabase",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: supacrawl,
    source_code_link: "https://github.com/bigsk1/supa-crawl-chat",
  },
  {
    name: "CFX Terminal",
    description:
      "Web application that combines AI capabilities with Twitter/X functionality to create an advanced social media management tool",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "social",
        color: "pink-text-gradient",
      },
    ],
    image: cfxterminal,
    source_code_link: "https://github.com/bigsk1/cfx-terminal",
  },
  {
    name: "Podcast AI",
    description:
      "AI podcast summary from a youtube video using Anthropic or XAI and Elevenlabs voices",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "anthropic",
        color: "green-text-gradient",
      },
      {
        name: "elevenlabs",
        color: "pink-text-gradient",
      },
    ],
    image: podcastai,
    source_code_link: "https://github.com/bigsk1/podcast-ai",
  },
  {
    name: "Matrix Crypto",
    description:
      "Matrix Crypto is a terminal application that provides real time prices of cryptocurrency information in a matrix-style animation. Think cmatrix but with crypto!",
    tags: [
      {
        name: "terminal",
        color: "blue-text-gradient",
      },
      {
        name: "crypto",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: matrixcrypto,
    source_code_link: "https://github.com/bigsk1/matrix-crypto",
  },
  {
    name: "AI Screen Analyzer",
    description:
      "AI Screen Analyzer allows users to capture screenshots, analyze them using various AI providers and models, and engage in conversations about the images.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "vision",
        color: "pink-text-gradient",
      },
    ],
    image: aiscreen,
    source_code_link: "https://github.com/bigsk1/ai-screen-analyzer",
  },
];

export { services, technologies, experiences, projects };
