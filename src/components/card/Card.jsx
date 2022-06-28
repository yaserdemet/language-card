import cardStyle from "./Card.module.css";
import { useState } from "react";

const Card = ({ img, name, options }) => {
  console.log(img);
  const [selected, setSelected] = useState(true);
  const [class1 ,setClass1] = useState(true)

  const clickHandler = () => {
      setClass1(!class1)
  }

  const newbee = () => {
    setSelected(!selected);
    clickHandler();
    
  };

  return (
   
    // <div className={cardStyle[class1 ? "container" : "state1" ] } onClick={newbee}>
    <div className={cardStyle["container"  ] } onClick={newbee}>
      {selected && (
        <>
          <div className={cardStyle["images"]}>
            <img src={img} alt="" />
          </div>
          <div className={cardStyle["name"]}>{name}</div>
        </>
      )}
      {!selected && options.map((option) => {
         return (<div className={cardStyle["options"]}>
          <p>{option}</p>
         </div>)
      }
      )}
       
      
    </div>
  );
};

export default Card;
