import { useState, useEffect } from "react";
import { fetchDataWB } from "./helpers.jsx";

import SectionHeader from "./SectionHeader.jsx";
import SectionBody from "./SectionBody.jsx";

const cond1 = (arr) => {
  return arr.map((x) => x.name).filter((x) => !x.includes(".md"));
};

const cond2 = (arr) => {
  const desc = (string1, string2) => {
    const group = string1.split("-").join(" ");
    const number = parseFloat(string2.split("-")[0]);

    return group + " - " + number + ".";
  };

  const name = (string) => {
    const newStr = string.split("-");
    newStr.shift();
    return newStr.join(" ").split(".html")[0];
  };

  const newArr = arr.map((x) => {
    return x
      .filter((x) => !x.name.includes(".md"))
      .map((x) => {
        return {
          description: desc(x.path.split("/")[0], x.name),
          repo: x.html_url.replace(x.name, ""),
          url: `https://zuzoup.github.io/Wes-Bos-Projects/${x.path}`,
          name: name(x.name),
        };
      });
  });

  return newArr.reduce((acc, cur) => {
    return [...acc, ...cur];
  }, []);
};

function WesBos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataWB(
      "https://api.github.com/repos/zuzoup/Wes-Bos-Projects/contents",
      cond1,
      cond2,
      setData
    );
  }, []);

  return (
    <section>
      <SectionHeader title={"Wes Bos Projects"} />
      <SectionBody data={data} />
    </section>
  );
}

export default WesBos;
