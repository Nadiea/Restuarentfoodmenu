// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import aos from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';

export default function FoodGallery() {

const {product} =useContext(CartContext);

useEffect(() => {
    aos.init();
  }, [])

  return (
    <div className=' container  mt-16'>
        <h1 className=' text-3xl font-bold text-center mb-16'>Food Gallery</h1>
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            product?.recipes?.map((item) => (

                <SwiperSlide key={item.id}  data-aos="zoom-in"
                data-aos-duration="3000">
                    <div className='  rounded-full border-2 border-red-800'>
                        <img className=' rounded-full' src={item.image} alt="product" />
                    </div>

                </SwiperSlide>




            ))
        }




   
      ...
    </Swiper></div>
  );
}