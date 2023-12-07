import React from "react";
import {useNavigate} from 'react-router-dom'

const AboutUs = () => {
    const navigate = useNavigate()
  return (
    <>
      <div>
        <div className="boxing">
          <div className="py-12 lg:py-20">
            <div className="lg:flex flex-row-reverse items-center">
              <div className="w-5/12">
                <img
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951271/Gleemora/Frame_26_qppuwj.png"
                  alt="reading"
                  className="w-full lg:w-11/12"
                />
              </div>
              <div className="w-7/12">
                <p className="syne text-xl lg:text-3xl">
                  There is a personal vulnerability that comes with living with
                  a chronic medical condition. Navigating the illness
                  conversation at work can be even more complex.
                </p>
                <button className="bg-grad text-white font-semibold rounded-[25px] lg:rounded-[40px] mt-10 px-6 lg:px-12 lg:py-5 py-3" onClick={() => navigate('/about')}>
                  About Gleemora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF8F9]">
        <div className="boxing">
          <div className="py-12 lg:py-20">
            <div className="lg:flex gap-8 items-center">
              <div className="w-5/12">
                <img
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951272/Gleemora/unnamed_2_engmei.png"
                  alt="reading"
                  className="w-full"
                />
              </div>
              <div className="w-7/12">
                <p className="syne font-semibold text-xl lg:text-3xl">
                  Find strength in shared experiences
                </p>
                <p className="mulish text-lg mt-10 leading-normal">
                  Navigating chronic health challenges or supporting a loved one
                  through their health struggles can be a profoundly emotional
                  and demanding journey. Gleemora's platform is dedicated to
                  those who find themselves on this path. The physical and
                  emotional hardships often bring a deep longing for connection,
                  understanding, and a ray of hope. At Gleemora, we understand
                  this need and strive to be the bridge that connects, supports,
                  and uplifts you in these trying times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
