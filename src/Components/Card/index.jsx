import React from "react"
import Item from "../Item"
import maldives from "./maldives.jpg"
import santorini from "./santorini2.jpg"
import hawaii from "./hawaii2.jpg"
import "./Card.css"

const ProductCard = ({nameType, image, amount, description, id, className}) =>{
    return(
        <div className={`product-card ${className}`}>
            <Item nameType={nameType} image={image} amount={amount} description={description} id={id} />
           
        </div>
    )
}


const Card = () =>{

    return(
        <>
       <div className="flex m-2  lg:text-2xl sm:text2xl justify-center responsive-card ">
           
       <ProductCard nameType="Maldives" image={maldives} description="Discover the exotic beauty of the Maldives, a paradise made up of over 1,000 islands with white sandy beaches and crystal clear waters that invite relaxation. With activities such as snorkeling, diving, and boat tours, this destination offers an unforgettable experience. Perfect for a romantic getaway, the Maldives boast luxurious resorts, sophisticated restaurants, and comfortable accommodations. Secure your booking now and prepare for an unforgettable experience!" amount="$250"  className="hover:scale-110 text-center m-1 p-4 bg-emerald-400 rounded-2xl w-90 " id="1" />

      <ProductCard nameType="Hawaii" image={hawaii} description="Discover the Pacific paradise with our travel packages to Hawaii! Comprised of eight tropical islands, it's the perfect destination for those seeking sun, sand, surf and more. Relax on white sand beaches, savor delicious local cuisine, explore active volcanoes, and marvel at stunning panoramic views. With surfing lessons, scenic hikes and snorkeling adventures, Hawaii is a paradise for nature sports enthusiasts. Book now and discover why this is one of the most popular tourist destinations in the world!" amount="$300" className="hover:scale-110 text-center p-4 m-1  bg-teal-400 rounded-2xl w-90" id="2" />

      <ProductCard nameType="Santorini" image={santorini} description="If you are looking for a truly spectacular destination for your next vacation, look no further than Santorini. With its unique landscapes, black and red sand beaches, white houses with blue roofs, and stunning sunsets, Santorini is truly one of Greece's gems. And with a variety of exciting activities, from hiking to diving, Santorini offers something for every taste. So why wait? Buy your travel package to Santorini now and experience everything this spectacular island has to offer." amount="$350" className="hover:scale-110 text-center p-4 m-1  bg-cyan-400 rounded-2xl w-90" id="3" />
   
           
       </div>
        </>

    )

}

export default Card
