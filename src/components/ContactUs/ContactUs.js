import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Divider } from '@mui/material';
const contacts = [
    'Contact Us',
    'Candle Safety',
    'Store Locator',
    'Privacy Policy',
    'Return Policy',
    'Shipping Policy',
    'Terms Of Service',
];

// cho phép 6 phần tử trên 1 hàng
function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

function ContactUs() {
    const chunkedContacts = chunkArray(contacts, 5);

    return (
        <div className="mt-16 ">
            {/* {chunkedContacts.map((chunk, rowIndex) => (
                <div key={rowIndex} className="flex  justify-center mb-4">
                    {chunk.map((contact, index) => (
                        <p
                            key={index}
                            className="text-center px-2 mx-8 text-[16px] hover:underline hover:cursor-pointer text-[#11151CBF]"
                        >
                            {contact}
                        </p>
                    ))}
                </div>
            ))} */}
            <Divider />
            <div className="flex  flex-wrap justify-center mb-4 w-[800px] ml-[300px] mt-16">
                {contacts.map((contact, index) => (
                    <p
                        key={index}
                        className="text-center px-2 mx-8 text-[16px] hover:underline hover:cursor-pointer text-[#11151CBF] mb-6"
                    >
                        {contact}
                    </p>
                ))}
            </div>

            <div className="flex items-center justify-center cursor-pointer mb-24">
                <FaFacebook className="text-[36px] transition-transform transform hover:scale-110" />
                <FaInstagram className="text-[36px] ml-8 transition-transform transform hover:scale-110" />
                <FaTwitter className="text-[36px] ml-8 transition-transform transform hover:scale-110" />
            </div>
            <Divider />
        </div>
    );
}

export default ContactUs;
