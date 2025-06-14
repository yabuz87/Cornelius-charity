import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import useGetStore from '../../store/useGetStore';
import { EffectCards, Autoplay } from 'swiper/modules'; // Added EffectCards for shadow effect
import 'swiper/css';
import 'swiper/css/effect-cards';

const GallerySlider = () => {
  const { getGalleries, galleryData } = useGetStore();

  useEffect(() => {
    
    getGalleries(); // Fetch data from backend
  }, []);

  return (
    <div className="mySwiperContainer border" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      height: "60vh"
    }}>
      {/* Title & Description Swiper */}
      <div className="d-flex align-items-center justify-content-center" style={{ gap: "60px" }}>
        <Swiper
          grabCursor={true}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ width: '500px' }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1} // Show only one item at a time
        >
          {galleryData && galleryData.length > 0 ? (
            galleryData.map((item) => (
              <SwiperSlide key={item._id}>
                <div style={{ marginTop: "30px" }}>
                  <h4>{item.title}</h4>
                  <p className="mt-2" style={{width:"250px"}}>{item.description}</p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <h4>Loading...</h4>
                <p>Please wait while we fetch the data.</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Photo Swiper with EffectCards & Infinite Loop Fix */}
      <div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]} 
          className="mySwiper"
          style={{ width: '500px' }}
          // loop={true} // Ensure infinite looping is active
          loopAdditionalSlides={galleryData?.length || 1} // Helps maintain loop behavior
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {galleryData && galleryData.length > 0 ? (
            galleryData.map((item) => (
              <SwiperSlide key={item._id}>
                <img
                  src={item.photo}
                  alt={`Slide ${item._id}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <h4>Loading...</h4>
                <p>Fetching images...</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySlider;