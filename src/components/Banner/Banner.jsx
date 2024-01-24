import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img
              data-aos="zoom-in"
              src={sateliteImg} alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
          </div>
          <div className=" space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-b-sky-800 border-r-sky-800">
            <p data-aos="fade-up" className=" text-sky-800 uppercase">Our Mission</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="uppercase text-5xl">Rapidcast</h1>
            <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse quas, consequatur amet voluptate sunt expedita perferendis, repudiandae est minima enim laudantium incidunt! A quod aliquam amet, animi provident nemo laboriosam minima cupiditate blanditiis aperiam, alias magni impedit? Deserunt consequatur iusto cupiditate neque explicabo quasi eius aperiam alias! Animi, repellendus!</p>
            <button data-aos="fade-up" data-aos-delay="700" className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
