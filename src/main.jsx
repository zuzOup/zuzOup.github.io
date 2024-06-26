import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./Layout/Layout.jsx";

import Nav from "./Nav/Nav";
import Aside from "./Aside/Aside";

import Footer from "./Footer/Footer";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <main id="main">
      <Aside left={true} />
      <Layout>home</Layout>
      <Aside left={false} />
    </main>
    <Footer />
  </React.StrictMode>
);
