import React, { useState } from 'react';
import { Box, Typography, Divider, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import products from './data'; // Import the product data

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
        <div className="mt-16 ml-[280px] mr-[280px]">
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
        </div>
    );
}

export default Cart;
