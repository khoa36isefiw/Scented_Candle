import React from 'react';
import { FaGooglePay, FaApplePay, FaPaypal, FaMoneyBill } from 'react-icons/fa';

const Footer = () => {
    const paymentMethods = [
        { name: 'Google Pay', icon: <FaGooglePay size={48} color="#4285F4" /> },
        { name: 'Apple Pay', icon: <FaApplePay size={48} color="#000000" /> },
        { name: 'PayPal', icon: <FaPaypal size={32} color="#003087" /> },
        { name: 'Momo', icon: <FaMoneyBill size={32} color="#00A9E0" /> },
    ];
    const contacts = ['Privacy Policy', 'Return Policy', 'Shipping Policy', 'Terms Of Service'];

    return (
        <footer className="text-white bg-gray py-4  left-0 right-0 bottom-0">
            <div className="container mx-auto flex flex-col items-center justify-between h-full text-[#11151CBF]">
                <div className="flex flex-wrap justify-center mb-6">
                    {contacts.map((contact, index) => (
                        <p
                            key={index}
                            className="mx-8 text-[16px] hover:underline hover:cursor-pointer mb-6"
                        >
                            {contact}
                        </p>
                    ))}
                </div>
                <div className="flex space-x-16">
                    {paymentMethods.map((method, index) => (
                        <div key={index} className="flex items-center justify-center">
                            {method.icon}
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-[18px]">&copy; 2023 Senko Mahiru</p>
            </div>
        </footer>
    );
};

export default Footer;
