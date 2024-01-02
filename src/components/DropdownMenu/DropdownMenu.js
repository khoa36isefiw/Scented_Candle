import React from 'react';

function DropdownMenu({ isVisible, handleMenuClick, menuItems, dropdownRef, selectedValue }) {
    return (
        <div
            ref={dropdownRef}
            className={`z-10 ${
                isVisible ? 'block' : 'hidden'
            } bg-white divide-y divide-gray-100 rounded-lg shadow 
            w-44
             dark:bg-gray-700 absolute top-[100%] mt-[2px]`}
        >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {menuItems.map((menuItem, index) => (   
                    <li key={index}>
                        <a
                            href="#"
                            onClick={() => handleMenuClick(menuItem.value)}
                            className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                                menuItem.value === selectedValue ? 'underline' : ''
                            }`}
                        >
                            {menuItem.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default DropdownMenu;
