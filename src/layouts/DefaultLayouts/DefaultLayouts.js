import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col w-full min-h-screen ">
            <div className=" w-full justify-self-center mt-[90px] h-fit ">
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;
