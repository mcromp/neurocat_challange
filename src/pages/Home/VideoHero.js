import heroVid from "../../assets/hero_vid.mp4";

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

export default VideoHero;
