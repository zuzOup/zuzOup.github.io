import React from "react";
import PropTypes from "prop-types";

class Cover extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    item: PropTypes.string,
    isHovered: PropTypes.bool,
  };

  render() {
    return (
      <>
        <div
          className={this.props.isHovered ? "cover_text cover_text_active" : "cover_text"}
        >
          <h4>{this.props.name}</h4>
          <h5>{this.props.item}</h5>
        </div>
        <div className={this.props.isHovered ? "cover cover_active" : "cover"}></div>
      </>
    );
  }
}

export default Cover;
