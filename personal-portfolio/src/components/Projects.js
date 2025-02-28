import React from "react";
import ProjectItem from "./ProjectItem";
import { useSpring, animated } from "@react-spring/web";
import "../styles/Projects.css";

const Projects = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const projects = [
    {
      title: "Pet Adoption Site",
      description: "A simple site about adopting a pet.",
      link: "https://github.com/Dhairya5122/Westcliff_Homework/tree/master/week1-day3",
      image: "adoptionPoster.png",
    },
    {
      title: "Great Cliffs Site",
      description: "A simple site about Cliffs and hikeing.",
      link: "https://github.com/Dhairya5122/Westcliff_Homework/tree/master/w2d2-homework",
      image: "GreatCliffs.png",
    },
    {
      title: "Splash Away",
      description: "Learn to swim! a site with water activities.",
      link: "https://github.com/Dhairya5122/Westcliff_Homework/tree/master/project",
      image: "splashes.png",
    },

    {
      title: "Auth App",
      description: "A simple site to work on authentication logic.",
      link: "https://github.com/Dhairya5122/westcliff_backend/tree/main/authAppt",
      image: "js-logo.webp",
    },
    {
      title: "Hotel Rover",
      description: "A Cutting Edge Hotel Booking Site.",
      link: "https://github.com/Dhairyashah5122/project-hotelrover",
      image: "icon2.png",
    },
  ];

  return (
    <animated.section id="projects" className="projects-section" style={props}>
      <div className="container-md">
        <h2 className="display-4 mb-5">Projects</h2>
        <div className="row flex-row justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-sm-6 col-lg-4">
              <ProjectItem
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default Projects;
