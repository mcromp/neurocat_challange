import React from "react";
import ProjectBlock from "./ProjectBlock";
import OfferingBlock from "./OfferingBlock";
import Header from "../../shared_components/Header";
import Footer from "../../shared_components/Footer";

import { offertingsData, projectsBlocksData } from "./projectData";
import "./style.css";

const ProjectsLinks = [
 { href: "#offerings", title: "Offerings" },
 { href: "#service", title: "Service Projects" },
 { href: "#nonprofit", title: "Non-Profit Projects" },
];

function Projects() {
 React.useEffect(() => {
  window.scroll(0, 0);
 }, []);
 return (
  <div className="page projects">
   <Header links={ProjectsLinks} />
   <div className="offerings" id="offerings">
    {offertingsData.map((offering) => (
     <OfferingBlock key={offering.title} offering={offering} />
    ))}
   </div>
   <div className="project-blocks">
    {projectsBlocksData.map((data) => (
     <ProjectBlock data={data} key={data.title} />
    ))}
   </div>
   <Footer />
  </div>
 );
}

export default Projects;
