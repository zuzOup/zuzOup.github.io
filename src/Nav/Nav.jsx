import { useEffect, useState, useRef } from "react";

import "./Nav.css";

function Nav() {
  const [isScroll, setIsScroll] = useState("top");

  const timerId = useRef();

  useEffect(() => {
    function scroll() {
      if (timerId.current) clearTimeout(timerId.current);

      const scrollDown = this.oldScroll < this.scrollY;
      this.oldScroll = this.scrollY;

      if (scrollDown && this.scrollY > 100) {
        setIsScroll("hidden");
      } else if (this.scrollY === 0) {
        setIsScroll("top");
      } else {
        setIsScroll("active");
        timerId.current = setTimeout(() => {
          setIsScroll("hidden");
        }, 2000);
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
      clearTimeout(timerId.current);
    };
  }, []);

  return (
    <header id="header">
      <nav className={isScroll}>
        <a href="https://zuzanaoupicka.web.app/" target="_blank" id="nav_resume">
          <div>Portfolio ➜</div>
        </a>
      </nav>
    </header>
  );
}

export default Nav;
