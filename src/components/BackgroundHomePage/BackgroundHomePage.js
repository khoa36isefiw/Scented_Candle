import React from 'react';
import bgHomePage from '../../assets/images/home-bg.jpeg';
function BackgroundHomePage() {
    return (
        <div className="mt-[15px] ">
            <img src={bgHomePage} alt="Home Page" className="h-[480px] w-full fill" />
        </div>
    );
}

export default BackgroundHomePage;
