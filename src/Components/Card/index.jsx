import React from "react"
import Item from "../Item"


const ProductCard = ({nameType, amount, description, id, className}) =>{
    return(
        <div className={`product-card ${className}`}>
            <Item nameType={nameType} amount={amount} description={description} id={id} />
        </div>
    )
}


const Card = () =>{

    return(
        <>
       <div className="flex m-5 p-5 lg:text-2xl sm:text2xl justify-center ">
           
       <ProductCard nameType="Maldives" amount="$250"  className="text-center m-1 p-4 bg-emerald-400 rounded-2xl w-80" id="1" />
      <ProductCard nameType="Hawaii" amount="$300" className="text-center p-4 m-1  bg-teal-400 rounded-2xl w-80" id="2" />
      <ProductCard nameType="Acropolis" amount="$350" className="text-center p-4 m-1  bg-cyan-400 rounded-2xl w-80" id="3" />
   
           
       </div>
        </>

    )

}

export default Card
