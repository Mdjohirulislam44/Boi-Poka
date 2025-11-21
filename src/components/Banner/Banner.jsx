import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-gray-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-lg rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold mb-15 mr-5">Books to freshen  <br />up your bookshelf</h1>
      
      <button className="btn btn-primary text-center bg-green-500  mt-12 w-[190px] h-16">View the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;