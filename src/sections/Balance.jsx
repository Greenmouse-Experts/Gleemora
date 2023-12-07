import React from "react";
import "../Stylesheet/home.css";

const Balance = () => {
  return (
    <>
      <div className="boxing">
        <div className="flex justify-between items-center py-12">
          <div className="w-5/12">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951272/Gleemora/Frame_24_1_inkwsj.png"
              alt="reading"
              className="w-full lg:w-11/12"
            />
          </div>
          <div className="w-7/12">
            <p className="syne lg:text-3xl font-semibold lg:w-[56%]">
              Balancing health challenges with work-life.
            </p>
            <div className="mt-10">
              <p className="sora leading-loose">
                Over half of the North American workforce is living with at
                least one chronic health condition. Yet, most career
                professionals struggle with disclosing their illness at work
                because of the associated stigma. With Gleemora, you'll find
                seasoned career professionals and influential achievers who've
                bravely faced and overcome chronic health battles while
                balancing their careers.  Our survivors provide real talk and
                genuine support. They understand the emotional toll, the sense
                of isolation, and the path to recovery because they've lived it.
              </p>
              <button className="bg-grad text-white font-semibold rounded-[25px] lg:rounded-[40px] mt-10 px-6 lg:px-12 lg:py-5 py-3">Secure your spot on the waitlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
