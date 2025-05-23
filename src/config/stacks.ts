import { type IconName } from "../interfaces/icon";

type Stack = {
  label: string;
  icon: IconName;
  hightlight?: boolean;
};

export const stacks: Stack[] = [
  {
    icon: "react",
    label: "Reactjs",
    hightlight: true,
  },
  {
    icon: "storybook",
    label: "Storybook",
  },
  {
    icon: "angular",
    label: "Angular",
  },
  {
    icon: "styled-components",
    label: "Styled Components",
    hightlight: true,
  },
  {
    icon: "css",
    label: "CSS",
    hightlight: true,
  },
  {
    icon: "scss",
    label: "SCSS",
  },
  {
    icon: "tailwindcss",
    label: "TailwindCSS",
  },
  {
    icon: "html5",
    label: "HTML",
    hightlight: true,
  },
  {
    icon: "javascript",
    label: "Javascript",
    hightlight: true,
  },
  {
    icon: "typescript",
    label: "Typescript",
    hightlight: true,
  },
  {
    icon: "java",
    label: "Java",
  },
  {
    icon: "spring",
    label: "Springboot",
  },
  {
    icon: "dart",
    label: "Dart",
    hightlight: true,
  },
  {
    icon: "flutter",
    label: "Flutter",
    hightlight: true,
  },
  {
    icon: "firebase",
    label: "Firebase",
  },
  {
    icon: "mysql",
    label: "MySQL",
  },
  {
    icon: "postgresql",
    label: "PostgreSQL",
  },
  {
    icon: "aws",
    label: "AWS",
  },
  {
    icon: "git",
    label: "Git",
    hightlight: true,
  },
  {
    icon: "github",
    label: "GitHub",
    hightlight: true,
  },
  {
    icon: "c",
    label: "C",
  },
  {
    icon: "docker",
    label: "Docker",
  },
];
