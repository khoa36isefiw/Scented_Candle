import React from 'react';
import imgComment from '../../assets/images/h3.webp';
function CustomerLove() {
    return (
        <div>
            <div className="cursor-pointer  mt-16 text-center text-[24px] font-bold">
                Customers Love
            </div>
            <div className="cursor-pointer hover:underline text-[#748f76] mt-2 text-center text-[18px]">
                <a href="https://www.facebook.com/Luan141002">
                    Leave your review here for a chance to be featured on our instagram or homepage!
                </a>
            </div>
            <div className="flex justify-around items-center">
                <img src={imgComment} alt="Customer Love" className="h-[250px]" />
                <img src={imgComment} alt="Customer Love" className="h-[250px]" />
                <img src={imgComment} alt="Customer Love" className="h-[250px]" />
            </div>
        </div>
    );
}

export default CustomerLove;
