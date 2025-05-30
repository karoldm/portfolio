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
import myplantsImage6 from "../assets/images/myplants/image6.webp";
import myplantsImage7 from "../assets/images/myplants/image7.webp";

import notesImage1 from "../assets/images/notes/image1.webp";
import notesImage2 from "../assets/images/notes/image2.webp";
import notesImage3 from "../assets/images/notes/image3.webp";
import notesImage4 from "../assets/images/notes/image4.webp";
import notesImage5 from "../assets/images/notes/image5.webp";

import shorturlImage1 from "../assets/images/shorturl/image1.webp";
import shorturlImage2 from "../assets/images/shorturl/image2.webp";
import shorturlImage3 from "../assets/images/shorturl/image3.webp";

import rotaseguraimage1 from "../assets/images/rota-segura/image1.webp";
import rotaseguraimage10 from "../assets/images/rota-segura/image10.webp";
import rotaseguraimage2 from "../assets/images/rota-segura/image2.webp";
import rotaseguraimage3 from "../assets/images/rota-segura/image3.webp";
import rotaseguraimage4 from "../assets/images/rota-segura/image4.webp";
import rotaseguraimage5 from "../assets/images/rota-segura/image5.webp";
import rotaseguraimage6 from "../assets/images/rota-segura/image6.webp";
import rotaseguraimage7 from "../assets/images/rota-segura/image7.webp";
import rotaseguraimage8 from "../assets/images/rota-segura/image8.webp";
import rotaseguraimage9 from "../assets/images/rota-segura/image9.webp";

import techtaste1 from "../assets/images/techtaste/image1.webp";
import techtaste2 from "../assets/images/techtaste/image2.webp";
import techtaste3 from "../assets/images/techtaste/image3.webp";
import techtaste4 from "../assets/images/techtaste/image4.webp";


import bookstore1 from "../assets/images/bookstore/image1.webp";
import bookstore2 from "../assets/images/bookstore/image2.webp";
import bookstore3 from "../assets/images/bookstore/image3.webp";
import bookstore4 from "../assets/images/bookstore/image4.webp";
import bookstore5 from "../assets/images/bookstore/image5.webp";
import bookstore6 from "../assets/images/bookstore/image6.webp";
import bookstore7 from "../assets/images/bookstore/image7.webp";
import bookstore8 from "../assets/images/bookstore/image8.webp";
import bookstore9 from "../assets/images/bookstore/image9.webp";
import bookstore10 from "../assets/images/bookstore/image10.webp";
import bookstore11 from "../assets/images/bookstore/image11.webp";
import bookstore12 from "../assets/images/bookstore/image12.webp";
import bookstore13 from "../assets/images/bookstore/image13.webp";
import bookstore14 from "../assets/images/bookstore/image14.webp";
import bookstore15 from "../assets/images/bookstore/image15.webp";
import bookstore16 from "../assets/images/bookstore/image16.webp";

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
    title: "Bookstore",
    tags: ["Mobile", "Web", "Fullstack"],
    description: "Bookstore is a user-friendly application designed to help bookstore owners and employees efficiently manage their inventory. The system allows administrators to add, edit, and organize books in the store’s catalog, including details such as title, author, and available stock. Employees can be added to the system with secure login access, enabling them to update stock levels",
    links: [
      { label: "Frontend", href: "https://github.com/karoldm/bookstore" },
      { label: "Backend", href: "https://github.com/karoldm/bookstore-api" },
      { label: "Site", href: "https://bookstore-636f3.web.app/" },
    ],
    images: [
      bookstore1,
      bookstore2,
      bookstore3,
      bookstore4,
      bookstore5,
      bookstore6,
      bookstore7,
      bookstore8,
      bookstore9,
      bookstore10,
      bookstore11,
      bookstore12,
      bookstore13,
      bookstore14,
      bookstore15,
      bookstore16,
    ],
    stackList: [
      "flutter",
      "dart",
      "aws",
      "java",
      "spring",
      "postgresql",
      "firebase",
      "docker",
    ],
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
      myplantsImage6,
      myplantsImage7,
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
    images: [notesImage1, notesImage2, notesImage3, notesImage4, notesImage5],
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
  {
    title: "Rota segura",
    tags: ["Mobile"],
    description:
      "Rota Segura helps police and firefighters reach rural homes where Google Maps struggles. Users can map routes with images and descriptions, and in emergencies, their route is sent to an admin for quick response.",
    links: [
      {
        label: "Repository",
        href: "https://github.com/karoldm/rota-segura-app",
      },
    ],
    images: [
      rotaseguraimage1,
      rotaseguraimage2,
      rotaseguraimage3,
      rotaseguraimage4,
      rotaseguraimage5,
      rotaseguraimage6,
      rotaseguraimage7,
      rotaseguraimage8,
      rotaseguraimage9,
      rotaseguraimage10,
    ],
    stackList: ["dart", "flutter", "firebase"],
  },
  {
    title: "Techtaste",
    tags: ["Mobile"],
    description:
      "Techtaste is a simples only interface delivery app where users can shopping your favorite dishes easly. The app was developed on Alura Immersion Flutter 2025!",
    links: [
      {
        label: "Repository",
        href: "https://github.com/karoldm/techtaste/tree/main",
      },
    ],
    images: [techtaste1, techtaste2, techtaste3, techtaste4],
    stackList: ["dart", "flutter"],
  },
];
