import React from 'react';
import { Button } from '@mui/material';
import imgOurStory from '../../assets/images/h-our.webp';
import 'animate.css';
import './OurStory.scss';

function OurStory() {
    return (
        <div className="flex items-start  mt-[96px] mx-[220px] relative">
            <div className="mr-10">
                <img
                    src={imgOurStory}
                    alt="Introduce Product"
                    className="h-[650px] w-[450px] rounded-[8px] shadow-lg shadow-[#212221]"
                />
            </div>
            <div className="text-[36px] mt-4 -ml-[60px] h-[620px] w-[500px] text-[#383d47bf] bg-white p-4 relative z-10 rounded-[4px]">
                <h3 className="text-[30px] mb-[24px]">Our Story</h3>
                <p className="mb-[24px] align text-justify text-[18px]">
                    The Scented Market recognized a need for more at home self-care by creating and
                    hand-making products such as Scented Soy Candles, Room Sprays, Bath Salts,
                    Bubble Bath, and so much more! We have created a lifestyle brand of products and
                    pride ourselves in being eco-friendly. We use the best quality ingredients in
                    our products while also being conscious of our environmental footprint by
                    offering reusable, recyclable packaging. In addition, we have a jar return
                    program at each store and offer candle refills. Our eco-friendly packaging
                    combined with our self-care mission allows our community to bring the spa home
                    and feel good about it.
                </p>

                <div className="mt-[24px]">
                    <Button
                        variant="contained"
                        sx={{
                            // define animation
                            '@keyframes width-increase': {
                                '0%': {
                                    transform: 'scaleY(1)',
                                },
                                '100%': {
                                    transform: 'scaleY(1.05)',
                                },
                            },
                            mt: 2,
                            borderRadis: '16px',
                            p: '12px 16px',

                            backgroundColor: '#5c7b5e',
                            '&:hover': {
                                backgroundColor: '#5c7b5e',
                                // use animation
                                animation: 'width-increase 1s ease infinite',
                            },
                        }}
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
