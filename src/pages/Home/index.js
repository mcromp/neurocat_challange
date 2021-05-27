import React, { useEffect } from "react";
import Header from "../../shared_components/Header";
import Block from "../../shared_components/Block";
import { Link } from "react-router-dom";
import HomeLinkBlock from "./HomeLinkBlock";
import "./style.css";

//assets
import icon0 from "../../assets/icon-slider-0.png";
import icon1 from "../../assets/icon-slider-1.png";
import bgicon0 from "../../assets/bg_icon_1.png";
import bgicon1 from "../../assets/bg_icon_2.png";
import bgicon2 from "../../assets/bg_icon_3.png";
import VideoHero from "./VideoHero";

const homeLinks = [
 { href: "#top", title: "Home" },
 { href: "#products", title: "Products" },
 { href: "#resources", title: "Resources" },
 { href: "#team", title: "Team" },
 { href: "#careers", title: "Careers" },
];

function Home() {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);
 return (
  <div id="top" className="page home">
   <Header links={homeLinks} />
   <VideoHero />
   <div className="home__hero">
    <h2>What/Who is Neurocat?</h2>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    </p>
   </div>
   <div className="home__statements">
    <div className="statement">
     <img src={icon0} alt="Icon for mission" className="statement-icon" />
     <h3>Neurocat's mission statement</h3>
    </div>
    <div className="statement">
     <img src={icon1} alt="Icon for vision" className="statement-icon" />
     <h3>Neurocat's vision statement</h3>
    </div>
   </div>
   <div className="home__products" id="products">
    <HomeLinkBlock
     link={"/projects"}
     title={"AI Quality Services"}
     icon={bgicon0}
    />
    <HomeLinkBlock link={"/projects"} title={"AIDKIT"} icon={bgicon1} />
    <HomeLinkBlock link={"/projects"} title={"DeepTrust"} icon={bgicon2} />
   </div>
   <div className="ai-infograph">
    <h3>Flowing Infograph of why AI Quality Matters</h3>
    <div className="ai-inforgraph-graphic" />
   </div>
   <div className="resources" id="resources">
    <Block />
    <div className="text">
     <h3>Neurocat's past industry projects...</h3>
     <p>
      architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
      quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
      magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
      quisquam est
     </p>
    </div>
   </div>
   <Link to="/projects">
    <div className="din">
     <div className="text">
      <h3>Neurocat's work with DIN Standard</h3>
      <p>
       qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
       quia non numquam eius modi tempora incidunt ut labore et dolore magnam
       aliquam quaerat voluptatem. qui dolorem ipsum quia dolor sit amet,
       consectetur, adipisci velit, sed quia non numquam eius modi tempora
       incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
     </div>
     <Block />
    </div>
   </Link>
   <div className="voices">
    <h2>Customer Voices</h2>
    <Block />
   </div>
   <div className="team" id="team">
    <h2>Team</h2>
    <Block />
   </div>
   <div className="careers" id="careers">
    <h2>Careers</h2>
    <Block />
   </div>
  </div>
 );
}

export default Home;
