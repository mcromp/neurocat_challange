import { Link } from "react-router-dom";

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

export default HomeLinkBlock;
