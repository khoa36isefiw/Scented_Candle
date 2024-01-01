import React, { useState, useEffect, useRef } from 'react';
import imgLink from '../../assets/images/logo.png';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { IoSearchSharp, IoPersonOutline, IoCartOutline, IoCloseSharp } from 'react-icons/io5';
import TextField from '@mui/material/TextField';
import 'animate.css';

function Header() {
    return (
        <div className="p-[50px]">
            <Header1 />

            <div></div>
        </div>
    );
}

export default Header;

function Header1() {
    const [isCurrencyDropdownVisible, setIsCurrencyDropdownVisible] = useState(false);
    const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);

    const [selectedCurrency, setSelectedCurrency] = useState('CAD | Canda');
    const [selectedLanguage, setSelectedLanguage] = useState('EN | English');

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
    // close overplay
    const handleOverlayClick = (event) => {
        if (
            event.target &&
            event.target.classList.contains('overlay') &&
            event.target &&
            event.target.classList.contains('close-icon')
        ) {
            setIsSearchModalVisible(false);
            console.log('chạy è');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideSearchModal);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSearchModal);
        };
    }, [isSearchModalVisible]);

    return (
        <div className="flex items-center justify-between margin-[auto] my-[16px] mx-[96px]">
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
                        <span className="mr-[4px]">{selectedCurrency}</span>{' '}
                        {isCurrencyDropdownVisible ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <DropdownMenu
                        dropdownRef={currencyDropdownRef}
                        isVisible={isCurrencyDropdownVisible}
                        handleMenuClick={handleCurrencyClick}
                        menuItems={currencyMenuItems}
                    />
                </div>
                {/* Language Dropdown */}
                <div className="relative ">
                    <div
                        id="languageDropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-[16px] align-center hover:underline focus:ring-4 focus:outline-none hover:cursor-pointer font-medium rounded-lg text-sm px-9 py-2 text-center inline-flex items-center "
                        type="button"
                        onClick={toggleLanguageDropdown}
                    >
                        <span className="mr-[4px]">{selectedLanguage}</span>{' '}
                        {isLanguageDropdownVisible ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <DropdownMenu
                        dropdownRef={languageDropdownRef}
                        isVisible={isLanguageDropdownVisible}
                        handleMenuClick={handleLanguageClick}
                        menuItems={languageMenuItems}
                    />
                </div>
                <div className="px-[16px] hover:cursor-pointer" onClick={toggleSearchModal}>
                    <IoSearchSharp />
                </div>
                <div className="px-[16px] hover:cursor-pointer">
                    <IoPersonOutline />
                </div>
                <div className="px-[16px] hover:cursor-pointer">
                    <IoCartOutline />
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
                                {/* Your search modal content goes here */}
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

function DropdownMenu({ isVisible, handleMenuClick, menuItems, dropdownRef }) {
    return (
        <div
            ref={dropdownRef}
            className={`z-10 ${
                isVisible ? 'block' : 'hidden'
            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-[100%] mt-[2px]`}
        >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            onClick={() => handleMenuClick(menuItem.value)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            {menuItem.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}