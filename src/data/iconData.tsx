import PythonIcon from "../assets/images/icons/python.png";
import CIcon from "../assets/images/icons/c.png";
import GitIcon from "../assets/images/icons/git.png";
import TypescriptIcon from "../assets/images/icons/typescript.png";
import DockerIcon from "../assets/images/icons/docker.png";

const icons: { name: string; src: string; description: string }[] = [
  {
    name: "Python",
    src: PythonIcon,
    description:
      "Used for personal projects including automated payment verification and a Selenium web scraping script that pulled metadata from Spotify playlists.",
  },
  {
    name: "C / C++",
    src: CIcon,
    description:
      "Worked with C in my machine architecture course to explore memory management, system calls, and low-level programming concepts.",
  },
  {
    name: "Git",
    src: GitIcon,
    description:
      "Use Git daily to track changes, manage branches, and version control everything from scripts to full-stack projects.",
  },
  {
    name: "TypeScript",
    src: TypescriptIcon,
    description:
      "Built this portfolio with TypeScript and React to catch bugs early and write clean, scalable frontend code.",
  },
  {
    name: "Docker",
    src: DockerIcon,
    description:
      "Learning Docker to create consistent development environments and understand how containerization supports scalable applications.",
  },
];

export default icons;
