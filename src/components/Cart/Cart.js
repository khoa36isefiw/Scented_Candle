import React, { useState } from 'react';
import { Box, Typography, Divider, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import products from './data'; // Import the product data
import 'animate.css';

const featuredCollections = [
    {
        imageUrl: 'https://ebacsi.vn/wp-content/uploads/2023/10/nen-thom-1-14.jpg',
        hoverImageUrl:
            'https://chus.vn/images/detailed/219/a04395bb03d6a2573eb979616237a67b_w767_h1105.jpg',
        name: 'Shower Gel - Cashmere',
        price: '$69.69 USD',
    },
    {
        imageUrl: 'https://img.fruugo.com/product/7/93/877286937_max.jpg',
        hoverImageUrl:
            'https://ae01.alicdn.com/kf/Sb0c3fb56700f43759c48ddb9d2f8e064y/Kitten-Paw-Scented-Candle-Room-Decor-Relieve-Fatigue-Morandi-Colors-Candles-Aromatherapy-Festive-Wedding-Birthday.jpg',
        name: 'Another Collection',
        price: '$99.99 USD',
    },
    {
        imageUrl: 'https://ebacsi.vn/wp-content/uploads/2023/10/nen-thom-1-14.jpg',
        hoverImageUrl:
            'https://chus.vn/images/detailed/219/a04395bb03d6a2573eb979616237a67b_w767_h1105.jpg',
        name: 'Shower Gel - Cashmere',
        price: '$69.69 USD',
    },
    {
        imageUrl: 'https://img.fruugo.com/product/7/93/877286937_max.jpg',
        hoverImageUrl:
            'https://ae01.alicdn.com/kf/Sb0c3fb56700f43759c48ddb9d2f8e064y/Kitten-Paw-Scented-Candle-Room-Decor-Relieve-Fatigue-Morandi-Colors-Candles-Aromatherapy-Festive-Wedding-Birthday.jpg',
        name: 'Another Collection',
        price: '$99.99 USD',
    },
];

function Cart() {
    const [productQuantities, setProductQuantities] = useState(
        products.map((product) => ({ id: product.id, quantity: 1 })),
    );

    const handleDecrease = (productId) => {
        setProductQuantities((prevQuantities) =>
            prevQuantities.map((product) =>
                product.id === productId && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product,
            ),
        );
    };

    const handleIncrease = (productId) => {
        setProductQuantities((prevQuantities) =>
            prevQuantities.map((product) =>
                product.id === productId ? { ...product, quantity: product.quantity + 1 } : product,
            ),
        );
    };

    const navigate = useNavigate();

    return (
        <div className="mt-16 ml-[120px] mr-[120px]">
            <div className="flex justify-between items-center">
                <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>Your Cart</Typography>
                <Typography
                    sx={{
                        fontSize: '16px',
                        textDecoration: 'underline',
                        color: '#a7bda0',
                        mt: 2,
                        '&:hover': {
                            color: '#5b7b5e',
                            cursor: 'pointer',
                        },
                    }}
                    onClick={() => navigate('/account/login')}
                >
                    Continue Shopping
                </Typography>
            </div>
            <div className="flex justify-between items-center mt-8 mb-4">
                <Typography sx={{ fontSize: '14px', color: '#a7a4a4' }}>Product</Typography>
                <Typography sx={{ fontSize: '14px', color: '#a7a4a4', ml: 50 }}>
                    Quantity
                </Typography>
                <Typography sx={{ fontSize: '14px', color: '#a7a4a4' }}>Total</Typography>
            </div>
            <Divider />
            <div className="mb-16">
                {products.map((product) => {
                    const quantityInfo = productQuantities.find((p) => p.id === product.id);
                    const total = quantityInfo
                        ? (product.price * quantityInfo.quantity).toFixed(2)
                        : '0.00';
                    return (
                        <div className="flex justify-between items-center mt-4" key={product.id}>
                            {/* product information */}
                            <div className="flex justify-center">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-[150px] h-[200px] object-fill"
                                />
                                <div className="w-[300px] ml-6">
                                    <Typography sx={{ fontSize: '14px', color: '#a7a4a4', mb: 2 }}>
                                        THE SCENTED MARKET
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>{product.name}</Typography>
                                    <Typography sx={{ fontSize: '14px', color: '#a7a4a4', mt: 2 }}>
                                        ${product.price.toFixed(2)}
                                    </Typography>
                                </div>
                            </div>
                            {/* update quantity product && remove */}
                            <div className="flex">
                                {/* update product  quantity */}
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
                                        disableTouchRipple
                                        onClick={() => handleDecrease(product.id)}
                                    >
                                        -
                                    </Button>
                                    <Typography>{quantityInfo.quantity}</Typography>
                                    <Button
                                        disableTouchRipple
                                        sx={{
                                            backgroundColor: 'transparent',
                                            color: '#585858',
                                            ':hover': {
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                        onClick={() => handleIncrease(product.id)}
                                    >
                                        +
                                    </Button>
                                </Box>
                                {/* remove */}
                                <div>
                                    <IconButton
                                        disableTouchRipple
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                // use animation
                                                animation: 'width-increase 1s ease infinite',
                                            },
                                        }}
                                    >
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </div>
                            </div>
                            {/* calculate total of product in shopping cart */}
                            <Typography>${total}</Typography>
                        </div>
                    );
                })}
            </div>
            <Divider />
            <div className="flex items-start justify-between">
                <div>
                    <Typography sx={{ mt: 2, mb: 2 }}>Write your post:</Typography>
                    <textarea
                        name="postContent"
                        rows={4}
                        cols={40}
                        placeholder="Write your post:"
                        style={{ border: '1px solid #ccc', padding: '8px', fontSize: '16px' }}
                    />
                </div>
                <div>
                    <Typography sx={{ mt: 2, mb: 2, textAlign: 'end' }}>Subtotal $69,69</Typography>
                    <Typography sx={{ mt: 2, mb: 2 }}>
                        Taxes and{' '}
                        <span className="text-[#a7bda0] hover:text-[#5b7b5e] hover:underline hover:cursor-pointer">
                            shipping
                        </span>{' '}
                        calculated at checkout
                    </Typography>{' '}
                    <div className="mt-[24px] text-center">
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                borderRadius: '16px',
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
                                p: '12px 36px',

                                backgroundColor: '#5c7b5e',
                                '&:hover': {
                                    backgroundColor: '#5c7b5e',
                                    // use animation
                                    animation: 'width-increase 1s ease infinite',
                                },
                            }}
                        >
                            checkout
                        </Button>
                    </div>
                </div>
            </div>
            {/* Featured Collection */}
            <div>
                <Typography fontWeight={'bold'}>Featured Collection</Typography>
                <div>
                    <div className="grid grid-cols-4 mt-4 ">
                        {featuredCollections.map((collection, index) => (
                            <div key={index} className="cursor-pointer w-[250px]">
                                <img
                                    src={collection.imageUrl}
                                    alt="Collection Image"
                                    style={{
                                        width: '250px',
                                        height: '300px',
                                        transition: '0.5s',
                                        objectFit: 'cover',
                                        marginBottom: '8px',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.classList.add(
                                            'animate__animated',
                                            'animate__pulse',
                                        );
                                        e.currentTarget.src = collection.hoverImageUrl;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.classList.remove('animate__pulse');
                                        e.currentTarget.src = collection.imageUrl;
                                    }}
                                />
                                <p className="text-[14px] hover:underline mb-1 mt-4">
                                    {collection.name}
                                </p>
                                <p className="text-[14px] no-underline">{collection.price}</p>
                                <div className="mt-2">
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            borderRadius: '16px',
                                            // define animation
                                            '@keyframes width-increase': {
                                                '0%': {
                                                    transform: 'scaleY(1)',
                                                },
                                                '100%': {
                                                    transform: 'scaleY(1.05)',
                                                },
                                            },
                                            borderRadis: '16px',
                                            p: '12px 36px',
                                            backgroundColor: '#5c7b5e',
                                            '&:hover': {
                                                backgroundColor: '#5c7b5e',
                                                // use animation
                                                animation: 'width-increase 1s ease infinite',
                                            },
                                        }}
                                    >
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
