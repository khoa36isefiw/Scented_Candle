import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header/Header2';
import MenuItem from '../../components/Menu/Menu';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { Box } from '@mui/material';
import FreeShip from '../../components/FreeShip/FreeShip';
import Header3 from '../../components/Header/Header3';

function DefaultLayout({ children }) {
    const location = useLocation();

    const is404Page = location.pathname === '/404';

    return (
        <Box>
            {/* if path is 404 show only component not found */}
            {/* {is404Page ? (
                <PageNotFound />
            ) : ( */}

            <Box>
                <FreeShip />
                <Header />
                {/* <Header2 /> */}
                <Header3 />

                {/* <MenuItem /> */}
                <Box>{children}</Box>
                <ContactUs />
                <Footer />
            </Box>
        </Box>
    );
}

export default DefaultLayout;
