console.log(
  "",
  "height " + window.innerHeight + "px",
  "\n",
  "\n",
  "width " + window.innerWidth + "px"
);

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

/*header disapearing on scroll*/

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

/*word rotate*/

const changeWord = document.getElementById("article_title_span");

function rotateWords() {
  const rotate = {
    content: ["CSS", "JS", "REACT", "HTML"],
    time1: 2000,
    time2: 1000,
  };

  function removeExtra() {
    const arr = Array.from(
      changeWord.getElementsByClassName("article_title_span_middle")
    );
    if (arr.length > 1) arr[0].remove();
  }

  let i = 0;

  setInterval(async () => {
    i + 1 === rotate.content.length ? (i = 0) : i++;

    const rotStart = Array.from(
      changeWord.getElementsByClassName("article_title_span_middle")
    )[0];

    const rotEnd = document.createElement("span");
    rotEnd.classList.add("article_title_span_under");
    rotEnd.classList.add(`article_title_span_${i}`);
    rotEnd.innerHTML = rotate.content[i];

    changeWord.append(rotEnd);

    await wait(rotate.time1);

    rotStart.classList.remove("article_title_span_middle");
    rotStart.classList.add("article_title_span_top");

    rotEnd.classList.remove("article_title_span_under");
    rotEnd.classList.add("article_title_span_middle");

    await wait(rotate.time2);
    rotStart.remove();
    removeExtra();
  }, rotate.time1 + rotate.time2);
}

rotateWords();
