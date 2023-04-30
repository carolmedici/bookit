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
           
       <ProductCard nameType="Maldives" description="Discover the exotic beauty of the Maldives, a paradise made up of over 1,000 islands with white sandy beaches and crystal clear waters that invite relaxation. With activities such as snorkeling, diving, and boat tours, this destination offers an unforgettable experience. Perfect for a romantic getaway, the Maldives boast luxurious resorts, sophisticated restaurants, and comfortable accommodations. Book now for a unique and memorable experience!" amount="$250"  className="text-center m-1 p-4 bg-emerald-400 rounded-2xl w-80" id="1" />

      <ProductCard nameType="Hawaii" description="Discover the Pacific paradise with our travel packages to Hawaii! Comprised of eight tropical islands, Hawaii is the perfect vacation destination for those seeking sun, sand, surf, and more. Relax on white sand beaches, savor delicious local cuisine, explore active volcanoes, and marvel at stunning panoramic views. With surfing lessons, scenic hikes, and snorkeling adventures, Hawaii is a paradise for nature and outdoor sports enthusiasts. Book now and discover why Hawaii is one of the most popular tourist destinations in the world!" amount="$300" className="text-center p-4 m-1  bg-teal-400 rounded-2xl w-80" id="2" />

      <ProductCard nameType="Acropolis" description="Experience the Acropolis with our Athens travel packages! This ancient citadel overlooks Athens and is home to the impressive ruins of the Parthenon, Erechtheion, and Temple of Athena Nike. Explore the fascinating history of ancient Greece and admire the stunning architecture and panoramic views of the city. Our exclusive packages offer an authentic Athens experience, including local cuisine and top-rated hotels. Book now and plan your unforgettable trip to the Acropolis!" amount="$350" className="text-center p-4 m-1  bg-cyan-400 rounded-2xl w-80" id="3" />
   
           
       </div>
        </>

    )

}

export default Card
