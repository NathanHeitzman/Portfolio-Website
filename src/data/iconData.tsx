import type { IconType } from "react-icons";
import { FaPython } from "react-icons/fa";
import { SiGit, SiTypescript, SiDocker, SiCplusplus } from "react-icons/si";

const icons: { name: string; icon: IconType; color: string; description: string }[] = [
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    description:
      "Used for personal projects including automated payment verification and a Selenium web scraping script that pulled metadata from Spotify playlists.",
  },
  {
    name: "C / C++",
    icon: SiCplusplus,
    color: "#00599C",
    description:
      "Worked with C in my machine architecture course to explore memory management, system calls, and low-level programming concepts.",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    description:
      "Use Git daily to track changes, manage branches, and version control everything from scripts to full-stack projects.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    description:
      "Built this portfolio with TypeScript and React to catch bugs early and write clean, scalable frontend code.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    description:
      "Learning Docker to create consistent development environments and understand how containerization supports scalable applications.",
  },
];

export default icons;
