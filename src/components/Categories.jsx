import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Categories() {
    const [categories, setCategory] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategory(data);
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const nextSlide = () => {
        // Check if we can slide further
        if (slide < categories.length - 3) {
            setSlide(slide + 3);
        }
    };

    const prevSlide = () => {
        // Prevent sliding beyond the first item
        if (slide > 0) {
            setSlide(slide - 3);
        }
    };

    return (
        <>
            <div className='max-w-[1200px] mx-auto '>
                <div className='flex my-5 items-center justify-between'>
                    <div className='text-[25px] font-bold'>What's on your mind?</div>
                    <div className='flex'>
                        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                            <FaArrowLeft />
                        </div>
                        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='flex overflow-hidden'>
                    <div className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${slide * 100}px)` // Adjust translateX dynamically based on the current slide
                        }}>
                        {categories.map((cat, index) => (
                            <div key={index} className='w-[150px] shrink-0'>
                                <img src={"http://localhost:5000/images/" + cat.image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='my-6 border-[1px]'/>
            </div>
        </>
    );
}
