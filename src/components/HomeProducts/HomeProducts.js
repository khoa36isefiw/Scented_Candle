import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import imgHomeProduct from '../../assets/images/Home-im2.webp';
import { FaClock } from 'react-icons/fa6';
import { MdOutlineIosShare } from 'react-icons/md';
import { GrLinkNext } from 'react-icons/gr';
import 'animate.css';

function HomeProducts() {
    return (
        <div className="flex items-start justify-between mt-[36px] mx-[220px]">
            <div className="mr-10">
                <img
                    src={imgHomeProduct}
                    alt="Introduce Product"
                    className="h-[550px] w-[450px] rounded-[8px] shadow-lg shadow-[#212221]"
                />
            </div>
            <div className="text-[16px] w-[450px] text-[#11151CBF]">
                <h4 className="text-[30px] mb-[24px]">
                    CARAMEL MACCHIATO Soy Wax Candle 8 oz - Scent of JANUARY
                </h4>
                <p className="text-[#11151CBF] mb-[24px]">$19.99 USD</p>
                <p className="text-[#11151CBF] mb-[24px] text-[14px]">
                    <span className="text-[#5c7b5e] underline cursor-pointer hover:font-bold hover:border-[#5c7b5e] ">
                        Shipping
                    </span>{' '}
                    calculated at checkout
                </p>
                <p className="mb-[24px] align text-justify text-[18px]">
                    The aromatic smell of the perfect blend of steamed milk, vanilla syrup and a
                    shot of espresso.. drizzled with caramel for a sweet finish.{' '}
                </p>
                <p className="flex items-center mt-[24px]">
                    <FaClock className="mr-[12px] text-[20px] text-[#5c7b5e]" />
                    <span className="text-[black]">Burn Time: Approximately 50 Hours</span>
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
                            p: 1,
                            borderRadis: '16px',

                            backgroundColor: '#5c7b5e',
                            '&:hover': {
                                backgroundColor: '#5c7b5e',
                                // use animation
                                animation: 'width-increase 1s ease infinite',
                            },
                        }}
                        fullWidth="true"
                    >
                        Add to cart
                    </Button>
                </div>
                {/* <div className="text-[14px] flex items-center justify-between mt-[24px] text-[#5c7b5e] cursor-pointer ">
                    <div
                        className="flex items-center hover:animate__animated hover:animate__shakeX hover:text-[16px] "
                        style={{
                            '&:hover': {
                                zIndex: 1,
                                animationDuration: '2.5s',
                                animationDelay: '0.2s',
                                animationName: 'shakeX',
                            },
                        }}
                    >
                        <MdOutlineIosShare className="text-[14px]" />
                        <p className="ml-[12px] hover:underline">Share</p>
                    </div>
                    <div className="flex items-center hover:animate__animated hover:animate__shakeX hover:text-[16px] ">
                        <p className="mr-[12px]  hover:underline">View full details</p>
                        <GrLinkNext className="text-[14px] " />
                    </div>
                </div> */}
                <div className="text-[14px] flex items-center justify-between mt-[24px] text-[#5c7b5e] cursor-pointer ">
                    <Box
                        className="flex items-center"
                        sx={{
                            '&:hover': {
                                zIndex: 1,
                                animationDuration: '1.5s',
                                animationDelay: '0.2s',
                                animationName: 'pulse',
                            },
                        }}
                    >
                        <MdOutlineIosShare className="text-[14px]" />
                        <p className="ml-[12px] hover:underline">Share</p>
                    </Box>
                    <Box
                        className="flex items-center"
                        sx={{
                            '&:hover': {
                                zIndex: 1,
                                animationDuration: '1.5s',
                                animationDelay: '0.2s',
                                animationName: 'pulse',
                            },
                        }}
                    >
                        <p
                            className="mr-[12px] hover:underline"
                            sx={{
                                mr: '12px',
                            }}
                        >
                            View full details
                        </p>
                        <Box className="text-[14px]">
                            <GrLinkNext className="text-[14px] " />
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default HomeProducts;
