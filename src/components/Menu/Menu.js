import React, { useState, useRef, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import 'animate.css/animate.css';
import './Menu.scss';

const MenuItem = () => {
    const [showItems, setShowItems] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const listRef = useRef(null);

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        // Check if the user has scrolled beyond 150 pixels
        setIsScrolled(window.scrollY > 150);
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleButtonClick = (menuItem) => {
        setShowItems(!showItems);
        setSelectedMenuItem(menuItem);
    };

    const handleListItemClick = (item) => {
        setSelectedItem(item);
        setShowItems(false);
    };

    const handleClickOutsideList = (event) => {
        if (listRef.current && !listRef.current.contains(event.target)) {
            setShowItems(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideList);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideList);
        };
    }, []);

    const menuItems = [
        { label: 'New Arrivals', items: [] },
        {
            label: 'Shop',
            items: [
                'Signature Candles',
                'Summer Nights Collection',
                'Fall Candles',
                'Winter Candles',
                'Dough Bowl Candles',
                'Limited Editions',
                'Carnival Candle Collection',
                'Crisp Candle Collection',
                'Essential Oil Collection',
                'Home Collection',
                'Pure Candle Collection',
                'Scent Of The Month',
                'Wood Wick Candles',
                'Candle Accessories',
                'Candle Snuffers',
                'Candle Wick Trimmers',
                'Candle Stands',
                'Matches',
                'USB Rechargeable Lighters',
                'Body Care',
                'Bath & Shower',
                'Face Care',
                'Hair Care',
                'Hand Sanitizer',
                'Hand Soaps',
                'Moisturizers',
                'Perfume',
                'Jewelry',
                'Bracelets',
                'Necklaces',
                'Earrings',
            ],
        },
        { label: 'For Your Home', items: ['Item 7', 'Item 8', 'Item 9'] },
        { label: 'About Us', items: ['Item 10', 'Item 11', 'Item 12'] },
        { label: 'Candle Making Classes', items: ['Item 13', 'Item 14', 'Item 15'] },
        { label: 'We Made Too Much', items: ['Item 16', 'Item 17', 'Item 18'] },
        { label: 'Wholesale', items: [] },
        { label: 'Gifting Made Easy', items: [] },
    ];

    return (
        <div>
            <Box
                sx={{
                    fontSize: '16px',
                    cursor: 'pointer',
                    mb: 2,
                    textAlign: 'center',
                    ml: 12,
                    mr: 12,
                }}
                className={`grid grid-cols-5 gap-4 items-center`}
            >
                {menuItems.map((menuItem, index) => (
                    <span
                        key={index}
                        className={`flex items-center text-center ${
                            showItems ? 'animate__fadeIn' : 'animate__fadeOut'
                        } ml-[12px] mr-[12px]`}
                        onClick={() => handleButtonClick(menuItem.label)}
                    >
                        {menuItem.label}
                        <div className="ml-[4px]">
                            {menuItem.items &&
                                menuItem.items.length > 0 &&
                                (selectedMenuItem === menuItem.label ? (
                                    <FaAngleDown />
                                ) : (
                                    <FaAngleUp />
                                ))}
                        </div>
                    </span>
                ))}{' '}
                <div className="menu-item-overlay"></div>
            </Box>
            <Divider />

            {showItems && (
                <Box
                    ref={listRef}
                    className={`
                         'bg-white'
                     cursor-pointer `}
                >
                    <List>
                        <Box className="grid grid-cols-4 gap-4">
                            {menuItems
                                .find((menuItem) => menuItem.label === selectedMenuItem)
                                ?.items.map((item) => (
                                    <ListItem
                                        key={item}
                                        onClick={() => handleListItemClick(item)}
                                        className="hover:underline text-[14px]"
                                    >
                                        {item}
                                    </ListItem>
                                ))}
                        </Box>
                    </List>
                    <Divider />
                </Box>
            )}
        </div>
    );
};

export default MenuItem;
