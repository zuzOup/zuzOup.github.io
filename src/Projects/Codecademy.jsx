import { useState, useEffect } from "react";
import { fetchDataMD } from "./helpers.jsx";

import SectionHeader from "./SectionHeader.jsx";
import SectionBody from "./SectionBody.jsx";

const conditions = (str) => {
  const newStr = str.split("**");
  newStr.shift();

  const desc = newStr
    .filter((x, i) => i % 2 !== 0)
    .map((x) => x.split("\n")[0])
    .map((x) => x.trim());

  const newArr = newStr
    .filter((x, i) => i % 2 === 0)
    .map((x) => x.split(" ").join("-"))
    .map((x) => {
      return x.includes("[") ? x.split("[")[1].split("]")[0] : x.split(":")[0];
    })
    .map((x, i) => {
      return {
        name: x.split("-").join(" "),
        repo: `https://github.com/zuzOup/Codecademy/tree/main/${x}/`,
        url: `https://zuzoup.github.io/Codecademy/${x}/`,
        description: desc[i],
      };
    });

  return newArr;
};

function Codecademy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataMD(
      "https://api.github.com/repos/zuzoup/Codecademy/contents/README.md",
      setData,
      conditions
    );
  }, []);

  return (
    <section>
      <SectionHeader title={"Codecademy"} />
      <SectionBody data={data} />
    </section>
  );
}

export default Codecademy;
