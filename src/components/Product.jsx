import React, { useState } from "react";
function Product({product}){
    const [count, setCount] = useState(0);
return(
    <div className="card" id={product.id}>
        <img src={product.img} alt="" />
        <p>{product.text_one}</p>
        <p>{product.quantity}</p>
        <h4>{product.price}</h4>
        <h3>{product.text}</h3>

        <div className="count">
            <button onClick={()=> setCount(count>1 ? count -1 : 1)}>-</button>
            <h3>{count}шт</h3>
            <button onClick={()=> setCount(count < 5?count +1 : 5)}>+</button>
        </div>
    </div>
)
}
export default Product;