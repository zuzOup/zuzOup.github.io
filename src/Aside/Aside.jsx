import { PropTypes } from "prop-types";

import AsideLeft from "./AsideLeft/AsideLeft";
import AsideRight from "./AsideRight/AsideRight";

import AsideDots from "./dotsAndLines/AsideDots";
import AsideLines from "./dotsAndLines/AsideLines";

import "./Aside.css";

function Aside({ left }) {
  return (
    <aside>
      <div>
        <AsideDots />
        {left ? <AsideLeft /> : <AsideRight />}
        <AsideLines />
      </div>
    </aside>
  );
}

Aside.propTypes = {
  left: PropTypes.bool,
};

export default Aside;
