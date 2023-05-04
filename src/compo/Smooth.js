import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import Slide from './Slide';
import { color } from 'framer-motion';

export default function Smooth  ()  {
  const [style, setstyle] = useState({ color: 'white', backgrounColor: 'black' });
  const [show, setShows] = useState([]);
  const [api, setApi] = useState('https://api.tvmaze.com/search/shows?q=all');
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/review/${id}`);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [api]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{backgroundColor : "white"}}>
      <div className="">
        <div className="p-2">
          <h1 className=" tt text-center mx-3" style={{ marginTop: '20px', fontSize: "6vh", color: '#198c36' }}>
            Wanna Know What's Trending?
          </h1>
        </div>
        <div className="d-flex justify-content-around" style={{marginTop :"9vh"}}>
          <div className="img2">
            <img
              src="https://www.clerksy.co/assets/juggling-506e5fa90e303f1c744b60b761942c86d14ba04d4ec7f2f1c7d5135a376ed929.svg"
              className="object-fit-cover rounded "
              alt="..."
              style={{ marginLeft: "6vw", width: "20vw", height:"35vh",outline :"none" }}
            />
          </div>
          <div className="tt" style={{marginTop :"7vh",color :"#163a24",fontSize :"5vh"}}>
            <p>Ready to level up your entertainment game?</p>
            <p className='p' style={{color :"#163a24",fontWeight :"lighter"}}>Check out our trending movies and TV shows -</p>
            <p className='p' style={{color :"#163a24",fontWeight :"lighter"}}>Handpicked for the coolest crowd in town. From viral hits to hidden gems, we've got the buzz you don't wanna miss.</p>
          </div>
        </div>
        <Slider {...settings}>
  {show.map((element) => (
    <Slide
      key={element.show}
      id={element.show.id}
      title={!element.show.title && element.show.name ? element.show.name : element.show.title}
      poster_path={element.show.image ? element.show.image.medium : null}
      date={element.show.premiered}
      handleClick={() => handleClick(element.show.id)}
    />
  ))}
</Slider>
</div>
</div>
);
}
