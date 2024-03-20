const main = document.getElementById("main");
const header = document.getElementById("header");

const ScrollLock = {
  block: function (scroll) {
    document.body.style.position = "relative";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.body.style.paddingRight = "9.75px";

    main.style.overflow = "hidden";

    header.style.boxShadow = "none";
    header.style.transition = "none";

    if (scroll > 0) {
      header.style.height = "11vh";
      header.style.minHeight = "11vh";

      const modal = document.getElementById("modal");
      const modal_inner = document.getElementById("modal_inner");

      modal.style.top = "11vh";
      modal_inner.style.top = "-11vh";
    }
  },

  allow: function () {
    document.body.style.overflow = null;
    document.body.style.paddingRight = null;
    document.body.style.height = null;
    document.body.style.paddingRight = null;

    main.style.overflow = null;

    header.style.transition = null;
    header.style.boxShadow = null;
    header.style.height = null;
    header.style.minHeight = null;
  },
};

export default ScrollLock;
