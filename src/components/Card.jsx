import React from "react";
const Card =({country})=>{
  
    return (
      
      <div className="card" id={country.id}>
        <img src={country.img} alt="" />
        <h3>{country.title}</h3>
        <h5>{country.travel}</h5>
         <p>{country.text}</p>

        <div className="card_panel">
          <h4>Countries</h4>
        </div>
      </div>
    );
}
export default Card;