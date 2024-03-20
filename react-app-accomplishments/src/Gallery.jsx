import PropTypes from "prop-types";
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import list from "./list";

class Gallery extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    arrow: PropTypes.bool,
    modalActive: PropTypes.string,
  };

  render() {
    const arrow = this.props.arrow;
    const modalActive = this.props.modalActive;
    const index = this.props.index;
    const timeout = 1100;

    return (
      <TransitionGroup
        component="div"
        className={`modal_imgContainer ${modalActive}`}
        childFactory={(child) =>
          React.cloneElement(child, {
            classNames: arrow ? "right-to-left" : "left-to-right",
            timeout: timeout,
          })
        }
      >
        <CSSTransition classNames="right-to-left" key={index} timeout={timeout}>
          <img
            src={`./certificates/${list[index].path}.png`}
            alt={`${list[index].name} - ${list[index].item}`}
          />
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Gallery;
