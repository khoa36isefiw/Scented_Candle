import React from 'react';
import { Button } from '@mui/material';
function HomeMarketBlog() {
    return (
        <div>
            <div className="mx-16 mt-16 mb-4">The Scented Market Blog:</div>
            <div className="flex items-center justify-around mt-2">
                <div>
                    <a href="https://www.facebook.com/Luan141002" target="_blank">
                        <img
                            className="h-[250px] w-[400px] rounded-[8px] shadow-lg shadow-[#212221]"
                            src="https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg"
                            alt="Slide 1"
                        />
                        <p className="text-center text-[#383d47bf] font-bold text-[20px] mt-8 hover:underline">
                            Title Here
                        </p>
                        <p className="text-center text-[#383d47bf] text-[16px]">
                            Jan, 2/ 2024 - Rengoku
                        </p>
                        <p className="text-center text-[#383d47bf] text-[16px]">Something here</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/Luan141002" target="_blank">
                        <img
                            className="h-[250px] w-[400px] rounded-[8px] shadow-lg shadow-[#212221]"
                            src="https://media.istockphoto.com/id/108125029/photo/mountain-landscapes.jpg?s=612x612&w=0&k=20&c=EbVDBkeFtgAxDRbR8SQ6mf4P9fkVCHoeGUxO3VdJ3zo="
                            alt="Slide 1"
                        />
                        <p className="text-center text-[#383d47bf] font-bold text-[20px] mt-8 hover:underline">
                            Title Here
                        </p>
                        <p className="text-center text-[#383d47bf] text-[16px]">
                            Jan, 2/ 2024 - Rengoku
                        </p>
                        <p className="text-center text-[#383d47bf] text-[16px]">Something here</p>
                    </a>
                </div>
            </div>
            <div className="mt-[24px] text-center">
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
                        p: '12px 36px',

                        backgroundColor: '#5c7b5e',
                        '&:hover': {
                            backgroundColor: '#5c7b5e',
                            // use animation
                            animation: 'width-increase 1s ease infinite',
                        },
                    }}
                >
                    View all
                </Button>
            </div>
        </div>
    );
}

export default HomeMarketBlog;
