import { useState, useEffect } from "react";
import { fetchDataMD } from "./helpers.jsx";

import SectionHeader from "./SectionHeader.jsx";
import SectionBody from "./SectionBody.jsx";

const conditions = (str) => {
  const newStr = str.split("**");
  newStr.shift();

  const desc = newStr
    .filter((x, i) => i % 2 !== 0)
    .map((x) => x.split("&nbsp; ")[1])
    .map((x) => x.split("\n")[0]);

  const newArr = newStr
    .filter((x, i) => i % 2 === 0)
    .map((x, i) => {
      return {
        name: x.split("[")[1].split("]")[0],
        repo: `https://github.com/zuzOup/The-Odin-Project/tree/main/${x
          .split(" ")
          .join("-")}/`,
        url: `https://zuzoup.github.io/The-Odin-Project/${x.split(" ").join("-")}/`,
        description: desc[i],
      };
    });

  return newArr;
};

function Odin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataMD(
      "https://api.github.com/repos/zuzoup/The-Odin-Project/contents/README.md",
      setData,
      conditions
    );
  }, []);

  return (
    <section>
      <SectionHeader title={"The Odin Project"} />
      <SectionBody data={data} />
    </section>
  );
}

export default Odin;
