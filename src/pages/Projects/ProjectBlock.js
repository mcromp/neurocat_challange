import Block from "../../shared_components/Block";

const ProjectBlock = ({ data }) => {
 return (
  <div className="project-block" id={data?.id}>
   <h3>{data.title}</h3>
   <Block />
  </div>
 );
};

export default ProjectBlock;
