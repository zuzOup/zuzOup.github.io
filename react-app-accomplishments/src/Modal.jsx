import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

import Gallery from "./Gallery";
import ScrollLock from "./ScrollLock";
import list from "./list";

function Modal({ index, onClose }) {
  let refScrollY = useRef(null);

  const [imgPath, setImgPath] = useState(index);
  const [arrow, setArrow] = useState(true);
  const [modalActive, setModalActive] = useState("");

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        setModalActive("");
        onClose();
      }
    }
    setModalActive(" active");

    window.addEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refScrollY.current = window.scrollY;
    ScrollLock.block(refScrollY.current);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      ScrollLock.allow();
      window.scrollTo(0, refScrollY.current);
    };
  }, [onClose]);

  function outsideModalClick(e) {
    if (e.target === e.currentTarget) {
      setModalActive("");
      onClose();
    }
  }

  function leftButton() {
    setImgPath((currentImgPath) => {
      let newImgPath;
      currentImgPath === 0
        ? (newImgPath = list.length - 1)
        : (newImgPath = currentImgPath - 1);

      return newImgPath;
    });
    setArrow(true);
  }

  function rightButton() {
    setImgPath((currentImgPath) => {
      let newImgPath;
      currentImgPath === list.length - 1
        ? (newImgPath = 0)
        : (newImgPath = currentImgPath + 1);

      return newImgPath;
    });

    setArrow(false);
  }

  function buttonOnClose() {
    setModalActive("");
    onClose();
  }

  return (
    <div className="modal" id="modal">
      <div className={"modal_inner" + modalActive} id="modal_inner">
        <span onClick={outsideModalClick}>
          <button
            id="modal_button_left"
            className={"modal_button_arrow" + modalActive}
            onClick={leftButton}
          ></button>
          <Gallery index={imgPath} arrow={arrow} modalActive={modalActive} />
          <button
            id="modal_button_right"
            className={"modal_button_arrow" + modalActive}
            onClick={rightButton}
          ></button>
        </span>
        <button
          className={"modal_button_close" + modalActive}
          onClick={buttonOnClose}
        ></button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  index: PropTypes.number,
  onClose: PropTypes.func,
};

export default Modal;
