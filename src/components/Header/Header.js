import React, { useState, useEffect, useRef } from 'react';
import imgLink from '../../assets/images/logo.png';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { IoSearchSharp, IoPersonOutline, IoCartOutline, IoCloseSharp } from 'react-icons/io5';
import { TextField, Box } from '@mui/material';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import 'animate.css';
import './Header.module.scss';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Header() {
    return (
        <Box>
            <Header1 />
        </Box>
    );
}

export default Header;

function Header1() {
    const navigate = useNavigate();
    const [isCurrencyDropdownVisible, setIsCurrencyDropdownVisible] = useState(false);
    const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);

    const [selectedCurrency, setSelectedCurrency] = useState('CAD | Canda');
    const [selectedLanguage, setSelectedLanguage] = useState('EN | English');
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

    const currencyDropdownRef = useRef(null);
    const languageDropdownRef = useRef(null);

    //search
    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

    const toggleCurrencyDropdown = () => {
        setIsCurrencyDropdownVisible(!isCurrencyDropdownVisible);
        setIsLanguageDropdownVisible(false); // Close language dropdown
    };

    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownVisible(!isLanguageDropdownVisible);
        setIsCurrencyDropdownVisible(false); // Close currency dropdown
    };

    const handleCurrencyClick = (currencyText) => {
        setSelectedCurrency(currencyText);
        setIsCurrencyDropdownVisible(false);
    };

    const handleLanguageClick = (languageText) => {
        setSelectedLanguage(languageText);
        setIsLanguageDropdownVisible(false);
    };

    const handleClickOutsideDropdown = (event) => {
        if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target)) {
            setIsCurrencyDropdownVisible(false);
        }
        if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
            setIsLanguageDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideDropdown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideDropdown);
        };
    }, []);

    const currencyMenuItems = [
        { label: 'VND | Viet Nam', value: 'VND | Viet Nam' },
        { label: 'CAD | Canda', value: 'CAD | Canda' },
        { label: 'USD | United States', value: 'USD | United States' },
        // Add more currency menu items as needed
    ];

    const languageMenuItems = [
        { label: 'VN | VietNamese', value: 'VN | VietNamese' },
        { label: 'EN | English', value: 'EN | English' },
        // Add more language menu items as needed
    ];

    // search button
    const toggleSearchModal = () => {
        setIsSearchModalVisible(!isSearchModalVisible);
        // Close other dropdowns when the search modal is opened
        setIsCurrencyDropdownVisible(false);
        setIsLanguageDropdownVisible(false);
    };

    const handleClickOutsideSearchModal = (event) => {
        if (
            isSearchModalVisible &&
            event.target &&
            !event.target.closest('.search-modal') &&
            isSearchModalVisible &&
            event.target &&
            !event.target.closest('.close-icon')
        ) {
            setIsSearchModalVisible(false);
            console.log('chạy è22');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideSearchModal);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSearchModal);
        };
    }, [isSearchModalVisible]);

    return (
        <div className={`flex items-center justify-between margin-[auto] my-[16px] mx-[96px] `}>
            {/* <div className="flex items-center justify-between margin-[auto] my-[16px] mx-[96px]"> */}
            <div className="w-[80px] h-[80px] cursor-pointer">
                <a href="/">
                    <img src={imgLink} alt="Luân Nèk" />
                </a>
            </div>
            {/* Currency Dropdown */}
            <div className="flex items-center justify-between flex-10">
                <div className="relative">
                    <div
                        id="currencyDropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-[16px] align-center hover:underline focus:ring-4 focus:outline-none hover:cursor-pointer font-medium rounded-lg text-sm px-9 py-2 text-center inline-flex items-center "
                        type="button"
                        onClick={toggleCurrencyDropdown}
                    >
                        <BsCurrencyDollar className="text-[16px]" />
                        <span className=" ml-[4px] mr-[4px]">{selectedCurrency}</span>{' '}
                        {isCurrencyDropdownVisible ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <DropdownMenu
                        dropdownRef={currencyDropdownRef}
                        isVisible={isCurrencyDropdownVisible}
                        handleMenuClick={handleCurrencyClick}
                        menuItems={currencyMenuItems}
                        selectedValue={selectedCurrency}
                    />
                </div>
                {/* Language Dropdown */}
                {/* <div className="relative ">
                    <div
                        id="languageDropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-[16px] align-center hover:underline focus:ring-4 focus:outline-none hover:cursor-pointer font-medium rounded-lg text-sm px-9 py-2 text-center inline-flex items-center 
                        "
                        type="button"
                        onClick={toggleLanguageDropdown}
                    >
                        <MdLanguage className="text-[16px]" />
                        <span className=" ml-[4px] mr-[4px]">{selectedLanguage}</span>{' '}
                        {isLanguageDropdownVisible ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <DropdownMenu
                        dropdownRef={languageDropdownRef}
                        isVisible={isLanguageDropdownVisible}
                        handleMenuClick={handleLanguageClick}
                        menuItems={languageMenuItems}
                        selectedValue={selectedLanguage}
                        fullWidth={true}
                    />
                </div> */}
                <div className="relative">
                    <div
                        id="languageDropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className={`text-[16px] align-center hover:underline focus:ring-4 focus:outline-none hover:cursor-pointer font-medium rounded-lg text-sm px-9 py-2 text-center inline-flex items-center `}
                        type="button"
                        onClick={toggleLanguageDropdown}
                    >
                        <MdLanguage className="text-[16px]" />
                        <span className="ml-[4px] mr-[4px]">{selectedLanguage}</span>{' '}
                        {isLanguageDropdownVisible ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <DropdownMenu
                        dropdownRef={languageDropdownRef}
                        isVisible={isLanguageDropdownVisible}
                        handleMenuClick={handleLanguageClick}
                        menuItems={languageMenuItems}
                        selectedValue={selectedLanguage}
                    />
                </div>
                <div
                    className="px-[16px] hover:cursor-pointer hover:scale-160 hover:text-[30px]"
                    onClick={toggleSearchModal}
                >
                    <IoSearchSharp className="hover:custom-scale hover:text-[25px] text-[20px]  hover:cursor-pointer transform transition-transform" />
                </div>

                <div className="px-[16px] ">
                    <IoPersonOutline
                        onClick={() => navigate('/account/login')}
                        className="hover:custom-scale hover:text-[25px] text-[20px]  hover:cursor-pointer transform transition-transform"
                    />
                </div>

                <div className="px-[16px] hover:cursor-pointer hover:text-[30px]">
                    <IoCartOutline
                        className="hover:custom-scale hover:text-[25px] text-[20px]  hover:cursor-pointer transform transition-transform"
                        onClick={() => navigate('/cart')}
                    />
                </div>
                {isSearchModalVisible && (
                    <div>
                        {/* Overlay */}
                        <div
                            className="overlay animate__animated animate__fadeInDownBig"
                            style={{
                                position: 'fixed',
                                top: '40px',
                                left: 0,
                                width: '100%',
                                height: '50%',
                                background: 'white',
                                zIndex: 1000,
                                transition: 'opacity 0.3s ease-out',
                                opacity: isSearchModalVisible ? 1 : 0,
                                pointerEvents: isSearchModalVisible ? 'auto' : 'none',
                            }}
                            // onClick={handleOverlayClick}
                        >
                            {/* Overlay background */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: '#11151c80',
                                    opacity: 0.7,
                                }}
                            />

                            {/* Search modal */}
                            <div
                                className={`search-modal ${isSearchModalVisible ? 'visible' : ''}`}
                                style={{
                                    position: 'fixed',
                                    top: '40px',
                                    left: 0,
                                    width: '100%',
                                    padding: '80px', // Adjust as needed
                                    height: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transform: isSearchModalVisible
                                        ? 'translateY(0)'
                                        : 'translateY(-100%)',
                                    zIndex: 10001,
                                }}
                            >
                                <TextField
                                    id="outlined-basic"
                                    sx={{ width: '600px' }}
                                    label="Search"
                                    placeholder="Searching about scented candles..."
                                    variant="outlined"
                                />
                                <IoSearchSharp className="mx-4 cursor-pointer" />

                                {/* Close icon */}

                                <IoCloseSharp
                                    className="mx-4 cursor-pointer"
                                    onClick={() => setIsSearchModalVisible(false)}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
