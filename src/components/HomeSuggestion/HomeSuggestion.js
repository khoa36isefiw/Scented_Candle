import React from 'react';
import h1 from '../../assets/images/h1.webp';
import h2 from '../../assets/images/h2.webp';
import h3 from '../../assets/images/h4.webp';
import { GrLinkNext } from 'react-icons/gr';
import './HomeSuggestion.scss';
function HomeSuggestion() {
    return (
        <div>
            <h3 className="mx-16 mt-16 mb-4">Shop Now</h3>
            <div className="flex justify-around items-center ">
                <div>
                    <a href="https://www.facebook.com/Luan141002" target="_blank">
                        <img
                            src={h1}
                            alt="Sản Phẩm 1"
                            className="w-[350px] h-[450px] object-cover rounded-[8px] shadow-lg shadow-[#212221]"
                        />
                    </a>
                    <div className=" mt-6 flex items-center justify-center cursor-pointer group text-[18px]">
                        <span className="mr-[8px] transition-transform transform group-hover:translate-x-1">
                            Best Sellers
                        </span>
                        <GrLinkNext className="transition-width ease-in-out duration-300 w-[24px] group-hover:w-[99px] text-[18px]" />
                    </div>
                </div>
                <div>
                    <a href="https://www.facebook.com/Luan141002" target="_blank">
                        <img
                            src={h2}
                            alt="Sản Phẩm 1"
                            className="w-[350px] h-[450px] object-cover rounded-[8px] shadow-lg shadow-[#212221]"
                        />
                    </a>
                    <div className=" mt-6 flex items-center justify-center  cursor-pointer group text-[18px]">
                        <span className="mr-[8px] transition-transform transform group-hover:translate-x-1">
                            Holiday Glam
                        </span>
                        <GrLinkNext className="transition-width ease-in-out duration-300 w-[24px] group-hover:w-[99px] text-[18px]" />
                    </div>
                </div>
                <div>
                    <a href="https://www.facebook.com/Luan141002" target="_blank">
                        <img
                            src={h3}
                            alt="Sản Phẩm 1"
                            className="w-[350px] h-[450px] object-cover rounded-[8px] shadow-lg shadow-[#212221]"
                        />
                    </a>
                    <div className=" mt-6 flex items-center justify-center cursor-pointer group text-[18px]">
                        <span className="mr-[8px] transition-transform transform group-hover:translate-x-1">
                            Clearance Decor
                        </span>
                        <GrLinkNext className="transition-width ease-in-out duration-300 w-[24px] group-hover:w-[99px] text-[18px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSuggestion;
