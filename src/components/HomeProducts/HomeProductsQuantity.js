import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import imgHomeProduct from '../../assets/images/Home-im2.webp';
import imgHomeProductQuantity from '../../assets/images/HomeProductQuantity.webp';
import { FaClock } from 'react-icons/fa6';
import { MdOutlineIosShare } from 'react-icons/md';
import { GrLinkNext } from 'react-icons/gr';
import 'animate.css';

function HomeProductsQuantity() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="flex items-start justify-between mt-[96px] mx-[220px] ">
            <div className="mr-10">
                <img
                    src={imgHomeProductQuantity}
                    alt="Introduce Product"
                    className="h-[550px] w-[450px] rounded-[8px] shadow-lg shadow-[#212221]"
                />
            </div>
            <div className="text-[16px] w-[450px] text-[#11151CBF]">
                <p className="text-[#585858] text-[10px] tracking-[4px] mb-[10px]">
                    THE SCENTED MARKET
                </p>
                <h4 className="text-[30px] mb-[24px]">MYSTERY Gift Bag</h4>
                <p className="text-[#585858] mb-[24px] flex ">
                    <span className="line-through mr-4">$39.99 USD </span>$19.99 USD
                    <div className="bg-[#5c7b5e] ml-4 text-[14px] w-[60px] h-[25px] text-white flex items-center justify-center">
                        SALE
                    </div>
                </p>
                <p className="text-[#11151CBF] mb-[24px] text-[14px]">
                    <span className="text-[#5c7b5e] underline cursor-pointer hover:font-bold hover:border-[#5c7b5e] ">
                        Shipping
                    </span>{' '}
                    calculated at checkout
                </p>
                <p className="mb-[24px] align text-justify text-[14px] text-[#585858]">Quantity</p>
                <Box
                    sx={{
                        width: '150px',
                        height: '50px',
                        border: '1px solid #585858',
                        color: '#585858',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        cursor: 'pointer',
                    }}
                >
                    <Button
                        sx={{
                            backgroundColor: 'transparent',
                            color: '#585858',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                        disableTouchRipple // ẩn đi màu của button khi click
                        onClick={handleDecrease}
                    >
                        -
                    </Button>
                    <Typography>{quantity}</Typography>
                    <Button
                        disableTouchRipple // ẩn đi màu của button khi click
                        sx={{
                            backgroundColor: 'transparent',
                            color: '#585858',
                            ':hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                        onClick={handleIncrease}
                    >
                        +
                    </Button>
                </Box>
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

export default HomeProductsQuantity;
