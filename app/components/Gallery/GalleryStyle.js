import styled from 'styled-components';

export const GallerySection = styled.section`
  padding: 60px 0;
  overflow: hidden;

  /* Ghi đè container default Bootstrap */
  .container {
    max-width: 1140px;

    @media (min-width: 576px) {
      max-width: 540px; /* xs */
    }

    @media (min-width: 768px) {
      max-width: 720px; /* sm */
    }

    @media (min-width: 992px) {
      max-width: 960px; /* md */
    }

    @media (min-width: 1200px) {
      max-width: 1140px; /* lg */
    }
  }

  .slick-list {
    padding: 0 !important;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #eff2f8;
    opacity: 1;
    transition: background-color 0.3s, transform 0.3s;
  }

  .slick-dots li.slick-active button {
    background-color: #005f3c;
    transform: scale(1.2);
  }

  .slick-dots li button:before {
    display: none;
  }

  .section-title {
    text-align: center;
    padding-bottom: 30px;

    h2 {
      font-size: 32px;
      font-weight: 400;
      margin-bottom: 20px;
      padding-bottom: 0;
      color: #008446;
      font-family: 'Poppins', sans-serif;
    }

    p {
      margin-bottom: 0;
    }

    .gallery-carousel {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      padding-top: 30px;
    }

    .gallery-carousel .owl-stage-outer {
      overflow: visible;
    }

    @media (min-width: 992px) {
      .gallery-carousel .center {
        overflow: hidden;
        border: 6px solid #008446;
        padding: 4px;
        background: #fff;
        z-index: 1;
        transform: scale(1.2);
        margin-top: 10px;
        border-radius: 25px;
      }
    }
  }

  .slick-slide img {
    // transition: transform 0.3s ease, border 0.3s ease;
  }

  .slick-center img {
    border: 5px solid #008446;
    border-radius: 25px;
    transition: none;

    padding: 0;
    margin: 0;
  }

  @media (max-width: 576px) {
    .slick-center img {
      border: none;
      padding: 0 20px;
    }
  }
`;

export const ImageLink = styled.a`
  img {
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
    max-width: 100%;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    padding: 0 10px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const EnlargedImage = styled.div`
  img {
    position: absolute;
    top: 105px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80%;
    max-height: 85vh;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      max-width: 85%;
    }

    @media (max-width: 576px) {
      max-width: 95%;
      max-height: 80vh;
    }
  }

  .close-btn {
    position: absolute;
    top: 90px;
    right: 20px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: white;
    cursor: pointer;
    z-index: 1001;

    @media (max-width: 576px) {
      top: 89px;
      right: 2px;
    }

    &:hover {
      color: #dac7c7;
    }

    i {
      font-size: 36px;
    }
  }
`;
