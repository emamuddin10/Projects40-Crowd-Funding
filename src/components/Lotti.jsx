import React from 'react';
import Lottie from 'lottie-react';
import loader from "../assets/loader.json"

const Lotti = () => {
    return (
        <div className='w-20 flex items-center justify-center mx-auto'>
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default Lotti;