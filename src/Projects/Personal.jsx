import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { fetchData } from "./helpers.jsx";

import SectionHeader from "./SectionHeader.jsx";
import SectionBody from "./SectionBody.jsx";

const conditions = (arr) => {
  const capital = (arr) => {
    return arr.map((x) => x.charAt(0).toUpperCase() + x.substring(1));
  };

  const oldVersion = (str) => {
    if (!str.includes("Old")) return str;

    const version = str.split("Old")[0] + "(Old version)";

    return version;
  };

  const newArr = arr
    .filter((x) => x.name.includes("_"))
    .map((x) => {
      return {
        name: oldVersion(capital(x.name.substring(1).split("-")).join(" ")),
        repo: x.html_url,
        url: x.homepage,
        description: x.description,
      };
    });
  return newArr;
};

function Personal() {
  const [data, setDeta] = useState([]);

  useEffect(() => {
    fetchData("https://api.github.com/users/ZuzOup/repos", setDeta, conditions);
  }, []);

  return (
    <section>
      <SectionHeader title={"Personal projects"} />
      <SectionBody data={data} />
    </section>
  );
}

export default Personal;

Personal.propTypes = { prop: PropTypes.any };
