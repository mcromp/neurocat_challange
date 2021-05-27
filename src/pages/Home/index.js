import React, { useEffect } from "react";
import Header from "../../shared_components/Header";
import { Link } from "react-router-dom";
import heroVid from "../../assets/hero_vid.mp4";
import icon0 from "../../assets/icon-slider-0.png";
import icon1 from "../../assets/icon-slider-1.png";
import bgicon0 from "../../assets/bg_icon_1.png";
import bgicon1 from "../../assets/bg_icon_2.png";
import bgicon2 from "../../assets/bg_icon_3.png";

import "./style.css";

const homeLinks = [
 { href: "#top", title: "Home" },
 { href: "#products", title: "Products" },
 { href: "#resources", title: "Resources" },
 { href: "#team", title: "Team" },
 { href: "#careers", title: "Careers" },
];

const VideoHero = () => {
 return (
  <div className="hero-vid-container">
   <div className="hero-vid-filter" />
   <video autoPlay muted loop className="hero-video">
    <source src={heroVid} type="video/mp4" />
    Your browser does not support the video tag.
   </video>
  </div>
 );
};

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
     link={"/services"}
     title={"AI Quality Services"}
     icon={bgicon0}
    />
    <HomeLinkBlock link={"/aidkit"} title={"AIDKIT"} icon={bgicon1} />
    <HomeLinkBlock link={"/deeptrust"} title={"DeepTrust"} icon={bgicon2} />
   </div>
   <div id="resources">
    <div>BLOCK</div>
    <h3>Neurocat's past industry projects...</h3>
    <p>
     architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
     quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
     magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
     quisquam est
    </p>
   </div>
   <Link to="/din">
    <div>
     <h3>Neurocat's work with DIN Standard</h3>
     <p>
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
      quia non numquam eius modi tempora incidunt ut labore et dolore magnam
      aliquam quaerat voluptatem.
     </p>
    </div>
   </Link>
   <div>
    <h2>Customer Voices</h2>
    BLOCK
   </div>
   <div id="team">
    <h2>Team</h2>
    BLOCK
   </div>
   <div id="careers">
    <h2>Careers</h2>
    BLOCK
   </div>
  </div>
 );
}

const HomeLinkBlock = ({ link, title, icon }) => (
 <Link to={link} className="link-block">
  <img src={icon} alt={`Icon for ${title}`} className="statement-icon" />
  <h3>{title}</h3>
  <p>
   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
   aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  </p>
 </Link>
);

export default Home;
