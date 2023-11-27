import React, { Component } from "react";
import Slider from "react-slick";
import sliderImg from "../../images/slider.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResetPassword = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              cssEase: "linear",
            },
          },
          {
            breakpoint: 800,
            settings: {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              cssEase: "linear",
            },
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              cssEase: "linear",
            },
          },
        ],
      };
    return (
      <div>
        <div>
      <Slider {...settings}>
        <div>
          <div className="slider-body">
            <div className="single-slider">
              <h1>Your body</h1>
              <p>
                Any questions about your body? On how it looks, feels, or
                changes? We have the answers for you right here.
              </p>
            </div>
            <img src={sliderImg} alt="" />
          </div>
        </div>
        <div>
          <div className="slider-body">
            <div className="single-slider">
              <h1>Your body</h1>
              <p>
                Any questions about your body? On how it looks, feels, or
                changes? We have the answers for you right here.
              </p>
            </div>
            <img src={sliderImg} alt="" />
          </div>
        </div>
        <div>
          <div className="slider-body">
            <div className="single-slider">
              <h1>Your body</h1>
              <p>
                Any questions about your body? On how it looks, feels, or
                changes? We have the answers for you right here.
              </p>
            </div>
            <img src={sliderImg} alt="" />
          </div>
        </div>
        <div>
          <div className="slider-body">
            <div className="single-slider">
              <h1>Your body</h1>
              <p>
                Any questions about your body? On how it looks, feels, or
                changes? We have the answers for you right here.
              </p>
            </div>
            <img src={sliderImg} alt="" />
          </div>
        </div>
      </Slider>
    </div>
      </div>
    );
};

export default ResetPassword;