const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (this.scrollY > 2) {
    header.classList.add("headerActive");
  } else if (this.scrollY === 0) {
    header.classList.remove("headerActive");
  }

  const scrollDown = this.oldScroll < this.scrollY;
  this.oldScroll = this.scrollY;

  if (scrollDown && this.scrollY > 100) {
    header.classList.add("headerHidden");
  } else {
    header.classList.remove("headerHidden");
  }
});

const changeWord = document.getElementById("article_title_span");
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

async function rotateWords() {
  function removeExtra() {
    if (
      Array.from(changeWord.getElementsByClassName("article_title_span_middle"))
        .length > 1
    ) {
      const toBeRemoved = Array.from(
        changeWord.getElementsByClassName("article_title_span_middle")
      )[0];
      toBeRemoved.remove();
    }
  }
  removeExtra();

  const js = Array.from(
    changeWord.getElementsByClassName("article_title_span_middle")
  )[0];

  const html = document.createElement("span");
  html.classList.add("article_title_span_under");
  html.classList.add("article_title_span_html");

  html.innerHTML = "HTML";
  changeWord.append(html);

  await wait(2000);

  js.classList.remove("article_title_span_middle");
  js.classList.add("article_title_span_top");

  html.classList.remove("article_title_span_under");
  html.classList.add("article_title_span_middle");

  await wait(1000);
  js.remove();
  removeExtra();

  const css = document.createElement("span");
  css.classList.add("article_title_span_under");
  css.classList.add("article_title_span_css");
  css.innerHTML = "CSS";

  changeWord.append(css);

  await wait(2000);

  html.classList.remove("article_title_span_middle");
  html.classList.add("article_title_span_top");

  css.classList.remove("article_title_span_under");
  css.classList.add("article_title_span_middle");

  await wait(1000);

  html.remove();
  removeExtra();

  const react = document.createElement("span");
  react.classList.add("article_title_span_under");
  react.classList.add("article_title_span_react");
  react.innerHTML = "REACT";

  changeWord.append(react);

  await wait(2000);

  css.classList.remove("article_title_span_middle");
  css.classList.add("article_title_span_top");

  react.classList.remove("article_title_span_under");
  react.classList.add("article_title_span_middle");

  await wait(1000);
  css.remove();
  removeExtra();

  const js2 = document.createElement("span");
  js2.classList.add("article_title_span_under");
  js2.classList.add("article_title_span_js");
  js2.innerHTML = "JS";

  changeWord.append(js2);

  await wait(2000);

  react.classList.remove("article_title_span_middle");
  react.classList.add("article_title_span_top");

  js2.classList.remove("article_title_span_under");
  js2.classList.add("article_title_span_middle");

  await wait(1000);

  react.remove();
  removeExtra();
}

rotateWords();
setInterval(rotateWords, 12000);
