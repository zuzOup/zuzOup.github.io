import Personal from "../Projects/Personal";
import Odin from "../Projects/Odin";

import "./Layout.css";
import WesBos from "../Projects/WesBos";
import Codecademy from "../Projects/Codecademy";

function Layout() {
  return (
    <article>
      <Personal />
      <Odin />
      <WesBos />
      <Codecademy />
    </article>
  );
}

export default Layout;
