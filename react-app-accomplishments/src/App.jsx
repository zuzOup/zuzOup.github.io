import React from "react";

import list from "./list";

import GridCell from "./GridCell";

import "./App.css";

class App extends React.PureComponent {
  render() {
    
    return list.map((certificate, i) => (
      <GridCell
        key={certificate.path}
        index={i}
        path={certificate.path}
        name={certificate.name}
        item={certificate.item}
      />
    ));
  }
}

export default App;
