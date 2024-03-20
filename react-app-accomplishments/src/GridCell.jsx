import { useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import Cover from "./Cover";
import Modal from "./Modal";

function GridCell({ index, path, name, item }) {
  const src = `./certificates/${path}.png`;
  const alt = `${name} - ${item}`;

  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function hover(e) {
    e.stopPropagation(e);
    setIsHovered(true);
  }

  function hoverClear() {
    setIsHovered(false);
  }

  function handleClickButton(e) {
    e.stopPropagation();
    setShowModal(true);
  }

  function handleClickModal() {
    hoverClear();
    setTimeout(() => setShowModal(false), 500);
  }

  return (
    <>
      <button
        onMouseEnter={hover}
        onMouseLeave={hoverClear}
        onClick={handleClickButton}
        className="gridCell"
      >
        <img src={src} alt={alt} className="imgCell"></img>
        <Cover name={name} item={item} isHovered={isHovered} />
      </button>
      {showModal &&
        createPortal(<Modal index={index} onClose={handleClickModal} />, document.body)}
    </>
  );
}

GridCell.propTypes = {
  name: PropTypes.string,
  item: PropTypes.string,
  path: PropTypes.number,
  index: PropTypes.number,
};

export default GridCell;
