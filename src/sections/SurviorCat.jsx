import React from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const SurviorCategories = () => {
    const cat = [
        {
            name: "Fibroid",
            img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/cinema_1_lqvkro.png",
            id: "",
            route: "",
        },
        {
            name: "Endometriosis",
            img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/cinema_1_1_gjhzdh.png",
            id: "",
            route: "",
        },
        {
            name: "PCOS",
            img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/cinema_1_2_ipypdn.png",
            id: "",
            route: "",
        },
        {
            name: "Cancer",
            img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1701941246/Gleemora/cinema_1_3_athstr.png",
            id: "",
            route: "",
        },
    ]
  return (
    <>
        <div className='bg-[#0D0D0D] text-white'>
            <div className='boxing'>
                <div className='py-12'>
                    <div className='flex justify-between items-center'>
                        <p className='syne text-2xl lg:text-3xl'>Survivor Categories</p>
                        <div className='flex gap-x-4 items-center text-gray-400'>
                            <BsArrowLeftCircle className='text-3xl cursor-pointer'/>
                            <BsArrowRightCircle className='text-3xl cursor-pointer'/>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 gap-8 mt-12 lg:mt-20'>
                        {
                            cat.map((item, i) => (
                                <div className='bg-[#201E23] relative p-6 h-[135px] rounded-[15px] hover:scale-105 duration-100' key={i}>
                                    <p className='font-medium'>{item.name}</p>
                                    <img src={item.img} alt="icons" className='absolute w-20 bottom-0 right-0'/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SurviorCategories