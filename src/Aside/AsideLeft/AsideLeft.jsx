const links = [
  { id: "github", href: "https://github.com/zuzOup" },
  { id: "linkedin", href: "" },
  { id: "codepen", href: "https://codepen.io/zuzOup" },
];

import { svg } from "./AsideLeft_svg";

function AsideLeft() {
  return (
    <div id="aside_left">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} target="_blank">
                {svg(link.id)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AsideLeft;
