import React from "react";
import "./App.css";
import ImageOne from "./Component/ImageOne";
import ImageTwo from "./Component/ImageTwo";
import ImageThree from "./Component/ImageThree";
import ImageFour from "./Component/ImageFour";
import Content from "./Component/Content";

function App() {
  return (
    <>
      <ImageOne />
      <Content/>
      <ImageTwo />
      <Content/>
      <ImageThree />
      <Content/>
      <ImageFour />
    </>
  );
}

export default App;
