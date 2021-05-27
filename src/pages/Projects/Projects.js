import React from "react";
import "./style.css";

//assets
import Header from "../../shared_components/Header";
import iconOff1 from "../../assets/icon-off-1.png";
import iconOff2 from "../../assets/icon-off-2.png";
import iconOff3 from "../../assets/icon-off-3.png";
import iconOff4 from "../../assets/icon-off-4.png";
import iconOff5 from "../../assets/icon-off-5.png";
import iconOff6 from "../../assets/icon-off-6.png";

const ProjectsLinks = [
 { href: "#offerings", title: "Offerings" },
 { href: "#service", title: "Service Projects" },
 { href: "#nonprofit", title: "Non-Profit Projects" },
];

const offertingsData = [
 {
  title: "Research",
  text:
   "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique.",
  img: iconOff1,
 },
 {
  title: "Consulting",
  text:
   "Quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rem.",
  img: iconOff2,
 },
 {
  title: "Analysis",
  text:
   "Dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  img: iconOff3,
 },
 {
  title: "Optimization",
  text:
   "Rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
  img: iconOff4,
 },
 {
  title: "Governance",
  text:
   "Et harum quidem consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem  et aut officiis debiti nihil impedit.",
  img: iconOff5,
 },
 {
  title: "DevOps",
  text:
   "Velit, sed quia non numquam empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem  et aut officiis debiti nihil impedit.",
  img: iconOff6,
 },
];

function Projects() {
 return (
  <div className="page projects">
   <Header links={ProjectsLinks} />
   <div className="offerings" id="offerings">
    {offertingsData.map((offering) => (
     <OfferingBlock key={offering.title} offering={offering} />
    ))}
   </div>
  </div>
 );
}

const OfferingBlock = ({ offering }) => (
 <div className="offering">
  <img alt={`Icon of ${offering.title}`} src={offering.img} />
  <h3>{offering.title}</h3>
  <p>{offering.text}</p>
 </div>
);

export default Projects;
