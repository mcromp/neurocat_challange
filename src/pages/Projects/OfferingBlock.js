const OfferingBlock = ({ offering }) => (
 <div className="offering">
  <div className="img-container">
   <span className="helper"></span>
   <img alt={`Icon of ${offering.title}`} src={offering.img} />
  </div>
  <h3>{offering.title}</h3>
  <p>{offering.text}</p>
 </div>
);

export default OfferingBlock;
