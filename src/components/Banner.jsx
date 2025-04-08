import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh] rounded-2xl shadow-xl overflow-hidden">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1601231522153-4910f56cb71e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full object-cover"
          alt="Crowdfunding"
        />
        <div className="absolute flex flex-col justify-center h-full w-full bg-black/35 px-16 md:px-24 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-xl">
            Help Flood People
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-lg">
            Empower your idea with the support of the crowd. Let the world back
            your vision.
          </p>
          <button className="btn bg-green-500 py-2 px-3 w-sm">Start Campaign </button> 
          
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1663099686984-68d93a36db1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full object-cover"
          alt="Supportive Community"
        />
        <div className="absolute flex flex-col justify-center h-full w-full bg-black/30 px-16 md:px-24 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-xl">
            Donate Winter Clothes <br /> & Join Our Mission
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-lg">
            Build your audience and gain real backers who believe in your idea.
          </p>
          <button className="btn bg-green-500 py-2 px-3 w-sm"> Explore Campaign </button>
          
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1601231522153-4910f56cb71e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full object-cover"
          alt="Together We Build"
        />
        <div className="absolute flex flex-col justify-center h-full w-full bg-black/35 px-16 md:px-24 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-xl">
            Together, We Can Make It Happen
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-lg">
            Every little help adds up. Start your journey toward innovation
            today.
          </p>
          <button className="btn bg-green-500 py-2 px-3 w-sm">Explore Campaign </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
