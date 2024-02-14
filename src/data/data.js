import SkillImg1 from "../assets/img/HTML.png";
import SkillImg2 from "../assets/img/CSS.png";
import SkillImg3 from "../assets/img/JavaScript.png";
import SkillImg4 from "../assets/img/react.png";
import SkillImg5 from "../assets/img/c.svg";
import SkillImg7 from "../assets/img/Git.png";
import SkillImg9 from "../assets/img/docker.png";
import SkillImg10 from "../assets/img/Kubernetes.png";
// import ProjectImage1 from "../assets/img/animefans.png";
import ProjectImage2 from "../assets/img/FundRaiser.jpg";
import { FaLinkedin, FaMediumM } from "react-icons/fa";
import { FiInstagram, FiGithub } from "react-icons/fi";

// navigation
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

// social media
export const social = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/parmar-vishal",
    color: "text-sky-500",
    ariaLabel: "LinkedIn",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/parmar_vishal31",
    color: "text-pink-600",
    ariaLabel: "Instagram",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/vishalparmarr",
    color: "text-white",
    ariaLabel: "Github",
  },
  {
    icon: <FaMediumM />,
    href: "https://medium.com/@vishalbusiness3108",
    color: "text-white",
    ariaLabel: "Medium",
  },
];

// about me
export const aboutMe = [
  {
    description:
    "Hello there! My name is Vishal Parmar, and I am currently pursuing my B.Tech in Computer Science at IIST, Indore. I am passionate about continuous learning and practice coding, developing multiple web-based applications, exploring cloud computing, and delving into blockchain. I have hands-on experience in programming languages such as C++. Additionally, I am actively building full-stack applications using JavaScript and React.",
  },
  {
    description:
      "I love the entire process of developing creative websites. It allows me to create something both beautiful and functional. I want to continue improving my skills that can enable me to be more creative and be able to build visually appealing websites.",
  },
  {
    description: "Here are a few technologies I’ve been working with recently:",
  },
];

// skills
export const skills = [
  {
    name: "React.JS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "C++",
  },
  {
    name: "Solidity",
  },
  {
    name: "Docker",
  },
  {
    name: "Kubernetes",
  },
];

// skills image
export const skillImages = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
];

// project details
export const projects = [
  // {
  //   image: ProjectImage1,
  //   name: "AnimeFans",
  //   description:
  //     "An anime streaming service made with ReactJS. User can search and watch the anime without ad.",
  //   tags: ["React", "HTML", "CSS"],
  //   frontend: "",
  //   backend: "",
  //   live: "https://animefans.netlify.app/",
  //   video: "https://www.loom.com/share/bde060385b60407bace6dd35e243214c",
  //   repo: "https://github.com/yushi1007/animefans",
  // },
  {
    image: ProjectImage2,
    name: "FundRaiser",
    description:
      "A Crowdfunding platform where users can raise funds for their projects and can also donate to other projects. Made with ReactJS and Solidity.",
    tags: ["React", "HTML", "CSS", "Solidity"],
    frontend: "",
    backend: "",
    live: "",
    video: "",
    repo: "https://github.com/vishalparmarr/FundRaiser.git",
  },
];
