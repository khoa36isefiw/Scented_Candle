import React, { useState } from 'react';
import imgLink from './luanmeme.jpg';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center text-white">
                <div className="logo">
                    <a href="/">
                        <img
                            src={imgLink}
                            alt="Logo"
                            className="w-16 h-12 cursor-pointer block mx-auto rounded-md"
                        />
                    </a>
                </div>

                <ul className="flex space-x-4">
                    {/* ... other menu items ... */}
                    <li className="relative group">
                        <a
                            href="#"
                            className=" relative"
                            onMouseEnter={() => setShowMenu(true)}
                            onMouseLeave={() => setShowMenu(false)}
                        >
                            Mega Menu
                            {showMenu && (
                                <div className="mega-menu absolute w-[1024px] top-full l-0 right-[100px] bg-black p-4">
                                    {/* Your Mega Menu content here */}
                                    <div className="row">
                                        <img src="img.jpg" alt="" />
                                    </div>
                                    <div className="row">
                                        <header>Design Services</header>
                                        <ul className="mega-links">
                                            <li>
                                                <a href="#">Graphics</a>
                                            </li>
                                            <li>
                                                <a href="#">Vectors</a>
                                            </li>
                                            <li>
                                                <a href="#">Business cards</a>
                                            </li>
                                            <li>
                                                <a href="#">Custom logo</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </a>
                    </li>
                </ul>

                <label htmlFor="showDrop" className="btn menu-btn block md:hidden">
                    <i className="fas fa-bars"></i>
                </label>
            </div>
        </nav>
    );
};

export default Navbar;
