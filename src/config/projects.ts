import { ProjectInfo } from "../interfaces/project";

// Import images
import kboardImage1 from "../assets/images/kboard/image1.webp";
import kboardImage2 from "../assets/images/kboard/image2.webp";
import kboardImage3 from "../assets/images/kboard/image3.webp";
import kboardImage4 from "../assets/images/kboard/image4.webp";
import kboardImage5 from "../assets/images/kboard/image5.webp";
import kboardImage6 from "../assets/images/kboard/image6.webp";

import devbookImage1 from "../assets/images/devbook/image1.webp";
import devbookImage2 from "../assets/images/devbook/image2.webp";
import devbookImage3 from "../assets/images/devbook/image3.webp";

import letmeaskImage1 from "../assets/images/letmeask/image1.webp";
import letmeaskImage2 from "../assets/images/letmeask/image2.webp";
import letmeaskImage3 from "../assets/images/letmeask/image3.webp";
import letmeaskImage4 from "../assets/images/letmeask/image4.webp";
import letmeaskImage5 from "../assets/images/letmeask/image5.webp";
import letmeaskImage6 from "../assets/images/letmeask/image6.webp";
import letmeaskImage7 from "../assets/images/letmeask/image7.webp";

import myplantsImage1 from "../assets/images/myplants/image1.webp";
import myplantsImage2 from "../assets/images/myplants/image2.webp";
import myplantsImage3 from "../assets/images/myplants/image3.webp";
import myplantsImage4 from "../assets/images/myplants/image4.webp";
import myplantsImage5 from "../assets/images/myplants/image5.webp";

import notesImage1 from "../assets/images/notes/image1.webp";
import notesImage2 from "../assets/images/notes/image2.webp";
import notesImage3 from "../assets/images/notes/image3.webp";

import shorturlImage1 from "../assets/images/shorturl/image1.webp";
import shorturlImage2 from "../assets/images/shorturl/image2.webp";
import shorturlImage3 from "../assets/images/shorturl/image3.webp";

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
      kboardImage1,
      kboardImage2,
      kboardImage3,
      kboardImage4,
      kboardImage5,
      kboardImage6,
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
    images: [devbookImage1, devbookImage2, devbookImage3],
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
      letmeaskImage1,
      letmeaskImage2,
      letmeaskImage3,
      letmeaskImage4,
      letmeaskImage5,
      letmeaskImage6,
      letmeaskImage7,
    ],
    stackList: ["react", "typescript", "scss", "firebase"],
  },
  {
    title: "MyPlants",
    tags: ["Mobile"],
    description:
      "A mobile app to help users care for their plants efficiently. It provides personalized reminders for watering plants and offers detailed information about each plant registered, such as ideal water intake and sun exposure. Perfect for gardening enthusiasts who want to keep their plants healthy.",
    links: [
      { label: "Repository", href: "https://github.com/karoldm/myplants" },
    ],
    images: [
      myplantsImage1,
      myplantsImage2,
      myplantsImage3,
      myplantsImage4,
      myplantsImage5,
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
    images: [notesImage1, notesImage2, notesImage3],
    stackList: ["tailwindcss", "react", "typescript"],
  },
  {
    title: "Short URL",
    tags: ["Web", "Serveless"],
    description:
      "A URL shortener developed to apply advanced AWS concepts such as API Gateway, Lambda, and S3. The application allows users to create short links and manage them efficiently, with fast redirection. Perfect for those looking to learn or implement serverless solutions.",
    links: [
      { label: "Frontend", href: "https://github.com/karoldm/short-url" },
      { label: "Backend", href: "https://github.com/karoldm/short-url-client" },
      { label: "Site", href: "https://karoldm.github.io/short-url-client/" },
    ],
    images: [shorturlImage1, shorturlImage2, shorturlImage3],
    stackList: ["angular", "aws", "java"],
  },
];
