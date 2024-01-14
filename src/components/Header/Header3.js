import React from 'react';
import './Header3.scss';
import imgLink from './luanmeme.jpg';

const Header3 = () => {
    return (
        <nav>
            <nav class="wrapper">
                <div class="logo">
                    <a href="/">
                        <img
                            src={imgLink}
                            alt="Logo"
                            className="w-16 h-12 cursor-pointer block mx-auto rounded-md"
                        />
                    </a>
                    {/* <a href="#">Luan's Candles</a> */}
                </div>

                <ul class="nav-links">
                    <label for="close-btn" class="btn close-btn">
                        <i class="fas fa-times"></i>
                    </label>
                    <li>
                        <a href="#">New Arrivals</a>
                    </li>

                    <li>
                        <a href="#" class="desktop-item">
                            Shop
                        </a>

                        <ul class="drop-menu">
                            <li>
                                <a href="#">Drop menu 1</a>
                            </li>
                            <li>
                                <a href="#">Drop menu 2</a>
                            </li>
                            <li>
                                <a href="#">Drop menu 3</a>
                            </li>
                            <li>
                                <a href="#">Drop menu 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="desktop-item">
                            For Your Home
                        </a>
                        <input type="checkbox" id="showMega" />
                        <label for="showMega" class="mobile-item">
                            For Your Home
                        </label>
                        <div class="mega-box">
                            <div class="content">
                                <div class="row">
                                    <img src="img.jpg" alt="" />
                                </div>
                                <div class="row">
                                    <header>Design Services</header>
                                    <ul class="mega-links">
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
                                <div class="row">
                                    <header>Email Services</header>
                                    <ul class="mega-links">
                                        <li>
                                            <a href="#">Personal Email</a>
                                        </li>
                                        <li>
                                            <a href="#">Business Email</a>
                                        </li>
                                        <li>
                                            <a href="#">Mobile Email</a>
                                        </li>
                                        <li>
                                            <a href="#">Web Marketing</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header>Security services</header>
                                    <ul class="mega-links">
                                        <li>
                                            <a href="#">Site Seal</a>
                                        </li>
                                        <li>
                                            <a href="#">VPS Hosting</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Seal</a>
                                        </li>
                                        <li>
                                            <a href="#">Website design</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                </ul>
                <label for="menu-btn" class="btn menu-btn">
                    <i class="fas fa-bars"></i>
                </label>
            </nav>
        </nav>
    );
};

export default Header3;
