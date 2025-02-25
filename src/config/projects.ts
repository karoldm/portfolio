import { ProjectInfo } from "../interfaces/project";

export const projects: ProjectInfo[] = [
  {
    title: "K-board",
    tags: ["Web", "Fullstack"],
    description:
      "A comprehensive project and task management application using the Kanban method. Designed to simplify team organization and task tracking, it allows users to create custom boards, move tasks between columns (To Do, Doing, Done), and collaborate in real-time. The application is scalable and secure, with integrated authentication and cloud storage.",
    links: [
      { label: "Frontend", href: "https://github.com/karoldm/k-board" },
      { label: "Backend", href: "https://github.com/karoldm/k-board-api" },
      { label: "Site", href: "https://k-board.onrender.com" },
    ],
    images: [
      "/images/kboard/image1.webp",
      "/images/kboard/image2.webp",
      "/images/kboard/image3.webp",
      "/images/kboard/image4.webp",
      "/images/kboard/image5.webp",
      "/images/kboard/image6.webp",
    ],
    stackList: [
      "react",
      "aws",
      "java",
      "spring",
      "postgresql",
      "typescript",
      "styled-components",
      "docker",
    ],
  },
  {
    title: "Devbook",
    tags: ["Web"],
    description:
      "A web application to explore developer profiles using the GitHub API. It provides detailed information such as repositories, followers, most-used programming languages, and recent activity. Ideal for recruiters or enthusiasts who want to quickly and intuitively explore developer profiles.",
    links: [
      { label: "Frontend", href: "https://github.com/karoldm/devbook" },
      { label: "Site", href: "https://devbook-d8fr.onrender.com/" },
    ],
    images: [
      "/images/devbook/image1.webp",
      "/images/devbook/image2.webp",
      "/images/devbook/image3.webp",
    ],
    stackList: ["react", "typescript", "styled-components"],
  },
  {
    title: "Letmeask",
    tags: ["Web", "Fullstack"],
    description:
      "An interactive platform for creating real-time Q&A rooms, perfect for live streams. Users can submit questions, upvote the most relevant ones, highlight important questions, and mark them as answered. The application is ideal for speakers, educators, or streamers looking to engage their audience.",
    links: [
      { label: "Frontend", href: "https://github.com/karoldm/letmeask" },
      { label: "Site", href: "https://letmeask.onrender.com/" },
    ],
    images: [
      "/images/letmeask/image1.webp",
      "/images/letmeask/image2.webp",
      "/images/letmeask/image3.webp",
      "/images/letmeask/image4.webp",
      "/images/letmeask/image5.webp",
      "/images/letmeask/image6.webp",
      "/images/letmeask/image7.webp",
    ],
    stackList: ["react", "typescript", "scss", "firebase"],
  },
  {
    title: "MyPlants",
    tags: ["Mobile"],
    description:
      "A mobile app to help users care for their plants efficiently. It provides personalized reminders for watering plants and offers detailed information about each species, such as ideal water intake and sun exposure. Perfect for gardening enthusiasts who want to keep their plants healthy.",
    links: [
      { label: "Repository", href: "https://github.com/karoldm/myplants" },
    ],
    images: [
      "/images/myplants/image1.webp",
      "/images/myplants/image2.webp",
      "/images/myplants/image3.webp",
      "/images/myplants/image4.webp",
      "/images/myplants/image5.webp",
    ],
    stackList: ["dart", "flutter"],
  },
  {
    title: "Notes",
    tags: ["Web"],
    description:
      "A versatile note-taking app that allows users to record notes in text or audio format, with automatic audio-to-text transcription. Ideal for quickly capturing ideas, reminders, or tasks during meetings, studies, or daily life.",
    links: [
      { label: "Frontend", href: "https://github.com/karoldm/notes" },
      { label: "Site", href: "https://karoldm.github.io/notes/" },
    ],
    images: [
      "/images/notes/image1.webp",
      "/images/notes/image2.webp",
      "/images/notes/image3.webp",
    ],
    stackList: ["dart", "flutter"],
  },
  {
    title: "Short URL",
    tags: ["Web", "Serveless"],
    description:
      "A URL shortener developed to apply advanced AWS concepts such as API Gateway, Lambda, and S3. The application allows users to create short links and manage them efficiently, with access metrics and fast redirection. Perfect for those looking to learn or implement serverless solutions.",
    links: [
      { label: "Frontend", href: "https://github.com/karoldm/short-url" },
      { label: "Backend", href: "https://github.com/karoldm/short-url-client" },
      { label: "Site", href: "https://karoldm.github.io/short-url-client/" },
    ],
    images: [
      "/images/shorturl/image1.webp",
      "/images/shorturl/image2.webp",
      "/images/shorturl/image3.webp",
    ],
    stackList: ["angular", "aws", "java"],
  },
];
