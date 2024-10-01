import React, { useState } from 'react';
import Slider from 'react-slick';
import img1 from 'images/home/gallery/app_01.jpg';
import img2 from 'images/home/gallery/app_02.jpg';
import img3 from 'images/home/gallery/app_03.jpg';
import img4 from 'images/home/gallery/app_04.jpg';
import img5 from 'images/home/gallery/app_05.jpg';
import img6 from 'images/home/gallery/app_06.jpg';
import img7 from 'images/home/gallery/app_07.jpg';
import img8 from 'images/home/gallery/app_08.jpg';
import {
  GallerySection,
  ImageLink,
  Overlay,
  EnlargedImage,
} from './GalleryStyle';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    touchThreshold: 10,
    centerMode: true,
    centerPadding: '70px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  const handleMouseUp = () => {
    setAutoplay(true);
    if (sliderRef) {
      sliderRef.slickPlay();
    }
  };

  const handleMouseDown = () => {
    setAutoplay(false);
  };

  const handleTouchStart = () => {
    setAutoplay(false);
  };

  const handleTouchEnd = () => {
    setAutoplay(true);
    if (sliderRef) {
      sliderRef.slickPlay();
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <GallerySection id="gallery">
      <div className="container-gallery">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Một số hình ảnh của ứng dụng Định Giá.</p>
        </div>

        <Slider {...settings} ref={setSliderRef} autoplay={autoplay}>
          {images.map((image, index) => (
            <ImageLink
              key={index}
              href="#"
              className="venobox"
              data-gall="Appcarousel"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={e => {
                e.preventDefault();
                handleImageClick(image);
              }}
            >
              <img src={image} alt={`App ${index + 1}`} />
            </ImageLink>
          ))}
        </Slider>

        {selectedImage && (
          <Overlay onClick={closeImage}>
            <EnlargedImage>
              <img src={selectedImage} alt="Zoom out" />
              <button type="button" className="close-btn" onClick={closeImage}>
                <i className="fas fa-times" />
              </button>
            </EnlargedImage>
          </Overlay>
        )}
      </div>
    </GallerySection>
  );
};

export default Gallery;
