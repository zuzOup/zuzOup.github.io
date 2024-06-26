import { PropTypes } from "prop-types";

import Aside from "./Aside";
import Home from "./Home";
import Accomplishments from "./Accomplishments";

import "./MainContent.css";

function MainContent({ acc }) {
  return (
    <main>
      <Aside left={true} />
      <article> {acc ? <Accomplishments /> : <Home />}</article>
      <Aside left={false} />
    </main>
  );
}

MainContent.propTypes = {
  acc: PropTypes.bool,
};

export default MainContent;
