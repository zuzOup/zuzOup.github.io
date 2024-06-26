import { useState, useEffect } from "react";
import { fetchMD } from "./helpers.jsx";

import SectionHeader from "./SectionHeader.jsx";
import SectionBody from "./SectionBody.jsx";

// const conditions = (arr) => {
//   const newArr = arr
//     .filter((project) => !project.name.includes(".md"))
//     .map((x) => {
//       return {
//         name: x.name.split("-").join(" "),
//         repo: x.html_url,
//         url: `https://zuzoup.github.io/The-Odin-Project/${x.name}/`,
//         description: "",
//       };
//     });
//   return newArr;
// };

const conditions = (str) => {
  const newStr = str.split("**");
  newStr.shift();

  const desc = newStr
    .filter((x, i) => i % 2 !== 0)
    .map((x) => x.split("&nbsp; ")[1])
    .map((x) => x.split("\n")[0])
    .map((x) => x.slice(0, 50));

  const newArr = newStr
    .filter((x, i) => i % 2 === 0)
    .map((x, i) => {
      return {
        name: x,
        repo: `https://github.com/zuzOup/The-Odin-Project/tree/main/${x.name}/`,
        url: `https://zuzoup.github.io/The-Odin-Project/${x.name}/`,
        description: desc[i],
      };
    });

  return newArr;
};

function Odin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMD(
      "https://raw.githubusercontent.com/zuzOup/The-Odin-Project/main/README.md",
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
