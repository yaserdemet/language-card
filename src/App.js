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
          <img src={reactLogo} alt="react-logo" />
        </div>
      </header>
      

      <div className=" outer">
       // * map edeceğin datayı bir kapsayıcı eleman ile gönder.
        {languages.map((language) => {
       // * datayı destructre edip de gönderebiliriz veya direkt gönderebiliriz.
          const { name, img, options } = language;
          return <Card key={name} name={name} img={img} options={options} />;
        // * datayı gönderirken hata almamak için key değeri gönderiyoruz.
        })}
      </div>
    </div>
  );
};

export default App;
