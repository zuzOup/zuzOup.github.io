import PropTypes from "prop-types";

import "./SectionBody.css";

function SectionBody({ data }) {
  return data.map((project) => {
    return (
      <div key={project.name} className="line">
        <div>{project.name}</div>
        <div>{project.description}</div>
        <a href={project.repo}>repo</a>
        {project.url !== null && <a href={project.url}>url</a>}
      </div>
    );
  });
}

export default SectionBody;

SectionBody.propTypes = { data: PropTypes.array };
