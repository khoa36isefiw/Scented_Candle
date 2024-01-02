import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import FreeShip from '../components/FreeShip/FreeShip';
import Header from '../components/Header/Header';
import MenuItem from '../components/Menu/Menu';
import BackgroundHomePage from '../components/BackgroundHomePage/BackgroundHomePage';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import HomeProductsQuantity from '../components/HomeProducts/HomeProductsQuantity';
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import HomeSuggestion from '../components/HomeSuggestion/HomeSuggestion';
import OurStory from '../components/OurStory/OurStory';
import CustomerLove from '../components/CustomerLove/CustomerLove';
import HomeMarketBlog from '../components/HomeMarketBlog/HomeMarketBlog';
import HomeFollow from '../components/HomeFollow/HomeFollow';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';
function HomePage() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const handleScroll = () => {
        // Adjust the scroll position threshold as needed
        const scrollThreshold = 100;
        const currentScrollY = window.scrollY;

        setIsHeaderVisible(currentScrollY < scrollThreshold);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ minHeight: '750vh', position: 'relative' }}>
            <FreeShip />
            <div>
                <Header />
                <MenuItem />
            </div>
            <BackgroundHomePage />
            <HomeProducts />
            <HomeProductsQuantity />

            <InfiniteScroll />
            <HomeSuggestion />
            <OurStory />
            <CustomerLove />
            <HomeMarketBlog />
            <HomeFollow />
            <ContactUs />
            <Footer />
        </Box>
    );
}

export default HomePage;
