import React from 'react';
import { Box } from '@mui/material';
function FreeShip() {
    return (
        <Box className="bg-[#a7bda0] h-[40px] w-full text-center justify-center flex items-center">
            <div>
                <span className="text-[16px] text-white px-4">
                    <span className="font-bold">FREE SHIPPING</span> on orders over $150
                </span>
                <span>🚚</span>
            </div>
        </Box>
    );
}

export default FreeShip;
