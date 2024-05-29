import React, { useState } from "react";
import Menu from "./components/Menu";
import Weather from "./components/Weather";
import "./index.css";

function App() {
  const [selectedFeature, setSelectedFeature] = useState("weather");

  const renderFeature = () => {
    switch (selectedFeature) {
      case "weather":
        return <Weather />;
      case "calculator":
        return <div>Calculator feature coming soon!</div>;
      default:
        return <div>Select a feature</div>;
    }
  };

  return (
    <div className="app">
      <Menu setSelectedFeature={setSelectedFeature} />
      <div className="content">{renderFeature()}</div>
    </div>
  );
}

export default App;
