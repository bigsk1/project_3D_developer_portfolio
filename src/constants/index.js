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
  bot,
  employ,
  btc,
  threejs,
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
    company_name: "Owner of business",
    icon: python,
    iconBg: "#383E56",
    date: "March 2016 - Present",
    points: [
      "Developing and maintaining web applications using CMS, PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create my own website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Homelab Networking",
    company_name: "Start Homelab journey",
    icon: python,
    iconBg: "#E6DEDD",
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
    iconBg: "#E6DEDD",
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
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.",
      "Built out Jekyll blog site and post regularly about current projects working on.",
      "Building and deloying Docker based apps either cloudflare tunnels or web services.",
      "Creating Ai agents based in python and using different technologies.",
    ],
  },
];



const projects = [
  {
    name: "TKS-GPT",
    description:
      "An open source Chat-GPT using Open Ai api. Works with GPT 3.5 turbo and chat history but should also work with Chat GPT 4 you just need the api key for it. Is able to do lists, bullet points, email templates and code blocks",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "open-ai",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: bot,
    source_code_link: "https://github.com/bigsk1/TKS-GPT",
  },
  {
    name: "Employ",
    description:
      "Employ Rating System is a web and cli application designed to calculate and display the overall rating of businesses based on various data points. Fetches ratings from Yelp, Google Places, and BBB.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: employ,
    source_code_link: "https://github.com/bigsk1/employ",
  },
  {
    name: "Bitcoinlib_RPC",
    description:
      "Use your locally hosted Bitcoin node (like Umbrel) and bitcoinlib in Python to create a wallet and send OP_RETURN message in a Bitcoin transaction). A fun and interesting project",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "bitcoin",
        color: "green-text-gradient",
      },
      {
        name: "scripts",
        color: "pink-text-gradient",
      },
    ],
    image: btc,
    source_code_link: "https://github.com/bigsk1/bitcoinlib_rpc",
  },
];

export { services, technologies, experiences, projects };
