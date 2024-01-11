import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MenuItem from '../../components/Menu/Menu';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { Box } from '@mui/material';
import FreeShip from '../../components/FreeShip/FreeShip';

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
                <MenuItem />
                <Box>{children}</Box>
                <ContactUs />
                <Footer />
            </Box>
        </Box>
    );
}

export default DefaultLayout;
