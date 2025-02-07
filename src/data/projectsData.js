// Импортируем изображения из папки assets
import project1Img from "../assets/img/project1.png";
import project2Img from "../assets/img/project2.png";
import project3Img from "../assets/img/project3.png";
import project4Img from "../assets/img/project4.png";
import project5Img from "../assets/img/project5.png";

const projects = [
  {
    id: "project1",
    title: "Watchcharm",
    description:
      "A responsive website for companies selling wristwatches. Developed the 'Catalog' section, ensuring an intuitive and visually appealing product showcase.",
    image: project1Img, // ✅ Теперь изображение импортировано правильно
    github: "https://github.com/T1mofii/MagicOn-and-gr18",
    liveDemo: "https://t1mofii.github.io/MagicOn-and-gr18/",
    skills: ["HTML", "CSS"],
  },
  {
    id: "project2",
    title: "Portfolio",
    description:
      "A responsive portfolio website showcasing projects and skills. Developed the 'FAQ' section to provide clear and structured information for users.",
    image: project2Img,
    github: "https://github.com/aandrea-alex/alex-template-portfolio",
    liveDemo: "https://aandrea-alex.github.io/alex-template-portfolio/",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "project3",
    title: "Water Tracker",
    description:
      "A web application for tracking daily water consumption. Worked on the login and registration system, as well as the logic for displaying progress in the progress bar.",
    image: project3Img,
    github: "https://github.com/anzalean/water-tracker-frontend",
    liveDemo: "https://water-tracker-frontend-seven.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    id: "project4",
    title: "Travel Trucks",
    description:
      "A website for purchasing travel trucks. Developed based on provided mockups, ensuring full implementation of the design and functionality.",
    image: project4Img,
    github: "https://github.com/AlinesaSabo/TravelTrucks",
    liveDemo: "https://travel-trucks-alpha-ashy.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    id: "project5",
    title: "Contact Book",
    description:
      "A web application for storing contacts with authentication and registration features. Allows users to securely save, manage, and organize their contact list.",
    image: project5Img,
    github: "https://github.com/AlinesaSabo/goit-react-hw-08",
    liveDemo: "https://contacts-page-sandy.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
];

export default projects;
