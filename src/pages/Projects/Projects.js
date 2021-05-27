import React from "react";
import "./style.css";
import Header from "../../shared_components/Header";

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
  img: "",
 },
 {
  title: "Consulting",
  text:
   "Quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rem.",
  img: "",
 },
 {
  title: "Analysis",
  text:
   "Dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  img: "",
 },
 {
  title: "Optimization",
  text:
   "Rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
  img: "",
 },
 {
  title: "Governance",
  text:
   "Et harum quidem consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem  et aut officiis debiti nihil impedit.",
  img: "",
 },
 {
  title: "DevOps",
  text:
   "Velit, sed quia non numquam empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem  et aut officiis debiti nihil impedit.",
  img: "",
 },
];

function Projects() {
 return (
  <div id="top" className="page labs">
   <Header links={ProjectsLinks} />
   <div className="offerings" id="offerings"></div>
  </div>
 );
}

const OfferingBlock = () => {};

export default Projects;
