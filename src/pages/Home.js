import React, { useEffect } from "react";
import Header from "../shared_components/Header";
import { Link } from "react-router-dom";
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
  <div id="top" className="page">
   <Header links={homeLinks} />
   <div>
    <h2>What/Who is Neurocat?</h2>
    <p className="home__top">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    </p>
   </div>
   <div>
    <div>
     <h3>Neurocat's mission statement</h3>
    </div>
    <div>
     <h3>Neurocat's vision statement</h3>
    </div>
   </div>
   <div className="home__products" id="products">
    <HomeLinkBlock link={"/services"} title={"AI Quality Services"} />
    <HomeLinkBlock link={"/aidkit"} title={"aidkit"} />
    <HomeLinkBlock link={"/deeptrust"} title={"DeepTrust"} />
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

const HomeLinkBlock = ({ link, title }) => (
 <Link to={link}>
  <div>
   BLOCK HERE
   <h3>{title}</h3>
   <p>
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
   </p>
  </div>
 </Link>
);

export default Home;
