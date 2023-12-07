import React from "react";
import { RiCalendarLine } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const DrawingStrength = () => {
  const shrinks = [
    {
      name: "Milan J.",
      desc: "Lupus Survivor",
      career: "Television Host",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/undraw_profile_pic_re_iwgo_1_voyqcw.png",
    },
    {
      name: "Derek F.",
      desc: "Multiple Sclerosis Survivor",
      career: "Lawyer",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/undraw_male_avatar_g98d_1_b9jzkx.png",
    },
    {
      name: "Nene C. Collins",
      desc: "Cancer Survivor",
      career: "Software Engineer",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941247/Gleemora/undraw_pic_profile_re_7g2h_1_meakxq.png",
    },
    {
      name: "Julian B.",
      desc: "Brain aneurysm Survivor",
      career: "Chief Marketing Officer",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941247/Gleemora/undraw_female_avatar_efig_1_ccdews.png",
    },
    {
      name: "Susan P.",
      desc: "Endometriosis Survivor",
      career: "Professional football player",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941247/Gleemora/undraw_profile_pic_re_iwgo_2_fk33xc.png",
    },
  ];
  return (
    <>
      <div className="">
        <div className="boxing">
          <div className="py-16 lg:py-20">
            <div>
              <p className="text-3xl font-medium text-center lg:w-9/12 mx-auto">
                Drawing strength from influential survivors has never been more
                accessible
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {
                    shrinks.map((item, i) => (
                        <div className="hover:shadow-lg hover:scale-105 duration-100 pb-4 rounded-[15px] cursor-move" key={i}>
                            <div className="relative bg-[#FFF8F9] h-[250px] grid place-content-center rounded-[15px]">
                                <span className="absolute top-2 left-3 px-3 py-[1px] text-[13px] mulish bg-white font medium rounded-[20px]">Survivor Mentor</span>
                                <img src={item.img} alt="profile" className="w-8/12 mx-auto" />
                            </div>
                            <div className="mt-4 px-2">
                                <div className="flex items-center mb-3 justify-between">
                                    <p className="mulish flex items-center gap-x-1"><span className="font-bold text-xl">{item.name}</span> <RiVerifiedBadgeFill className="text-[#F54B64]"/></p>
                                    <RiCalendarLine/>
                                </div>
                                <p className="mulish text-[15px]">{item.desc}</p>
                                <p className="mulish text-[15px]">{item.career}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-12 flex justify-center">
            <button className="bg-grad text-white font-semibold rounded-[25px] lg:rounded-[40px] mt-10 px-6 lg:px-12 lg:py-5 py-3">Be among the first to know</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawingStrength;
