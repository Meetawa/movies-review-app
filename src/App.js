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
      {Data.map((Element) => {
        return (
          <Content
            posterImg={Element.Poster}
            title={Element.Title}
            Year={Element.Year}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
