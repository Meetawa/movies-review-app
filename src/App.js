import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Data from "./Data.json";

const App = () => {
  console.log(Data);
  return (
    <div className="app">
      <Header />
      <div className="main">
        {Data.map((Element, i) => {
          return (
            <Content
              key={i}
              posterImg={Element.Poster}
              title={Element.Title}
              Year={Element.Year}
              rating={Element.Rating}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
