import React from 'react';
import errorImg from '../assets/404.gif'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <NavLink className='btn bg-green-300' to="/"> <h1 className=' text-xl font-semibold'>Back to home </h1></NavLink>
            <div>
                <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;