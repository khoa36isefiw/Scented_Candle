import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './InfiniteScroll.scss'; // Import your additional styles

const SlideImage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        marginLeft: '36px',
    };

    return (
        <div className="overflowX-scroll ml-[14px]">
            <Slider {...settings} className="ml-[14px] ">
                <div className="slide">
                    <img
                        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
                        alt="Slide 2"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://images.unsplash.com/photo-1552152370-fb05b25ff17d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D"
                        alt="Slide 3"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://media.istockphoto.com/id/108125029/photo/mountain-landscapes.jpg?s=612x612&w=0&k=20&c=EbVDBkeFtgAxDRbR8SQ6mf4P9fkVCHoeGUxO3VdJ3zo="
                        alt="Slide 4"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg"
                        alt="Slide 1"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://i.pinimg.com/564x/58/16/1c/58161caa9a4dba3ae039c25bc57508fe.jpg"
                        alt="Slide 5"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://mymodernmet.com/wp/wp-content/uploads/2019/07/the-blue-border-kilian-schonberger-4.jpg"
                        alt="Slide 6"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default SlideImage;
