// import React, { useState, useEffect } from 'react';
// import styles from './ScrollToTop.module.scss';
// import { Box } from '@mui/material';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// const ScrollToTopButton = () => {
//     const [visible, setVisible] = useState(false);

//     const toggleVisible = () => {
//         const scrolled = document.documentElement.scrollTop;
//         if (scrolled > 300) {
//             setVisible(true);
//         } else if (scrolled <= 300) {
//             setVisible(false);
//         }
//     };

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth',
//         });
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', toggleVisible);
//         return () => {
//             window.removeEventListener('scroll', toggleVisible);
//         };
//     }, []);

//     return (
//         <div
//             className={`${styles.backToTopButton} ${visible ? styles.open : ''}`}
//             onClick={scrollToTop}
//         >
//             <Box className="scroll-top flex items-center justify-center fixed bottom-30 right-50 w-[50px] h-[50px] text-white text-xs text-[12px] text-center bg-[#ff8503] cursor-pointer transition-all duration-1000 z-99">
//                 <KeyboardArrowUpIcon
//                     sx={{
//                         '.MuiSvgIcon-root': {
//                             height: '1.4rem',
//                             fontSize: '16px',
//                         },
//                     }}
//                 />
//             </Box>
//         </div>
//     );
// };

// export default ScrollToTopButton;

import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.scss';
import { Box } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    return (
        <div
            className={`${styles.backToTopButton} ${visible ? styles.open : ''}`}
            onClick={scrollToTop}
        >
            <Box className="scroll-top flex items-center justify-center fixed bottom-30 right-50 w-[100px] h-[50px] text-white text-xs text-[12px] text-center bg-[#15b97d] cursor-pointer transition-all duration-1000 z-99">
                <ArrowDropUpIcon
                    sx={{
                        '.MuiSvgIcon-root': {
                            height: '1.4rem',
                            fontSize: '16px',
                        },
                    }}
                />
                <p className="text-[14px]">To Top</p>
            </Box>
        </div>
    );
};

export default ScrollToTopButton;
