import React from "react";
import Card from "./components/card/Card";
import languages from "./helper/data";
import reactLogo from "./assets/react.svg";

const style = { width: "100px" };

const App = () => {
  return (
    <div>
      <header>
        <div className="reactLogo">
          <img src={reactLogo} alt="" />
        </div>
      </header>
      

      <div className=" outer">
       
        {languages.map((language) => {
          const { name, img, options } = language;
          return <Card key={name} name={name} img={img} options={options} />;
        })}
      </div>
    </div>
  );
};

export default App;
