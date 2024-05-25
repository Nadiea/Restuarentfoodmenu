import FoodGallery from "./FoodGallery"
import Hero from "./Hero"
import Productlist from "./Productlist"


function Home() {
  return (
    <div>
        <div className=" container">
            <Hero/>
            <Productlist/>
            <FoodGallery/>
        </div>
    </div>
  )
}

export default Home