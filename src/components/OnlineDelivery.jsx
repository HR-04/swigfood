import React, { useState, useEffect, useRef } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
        const [data,setData] = useState([]);
        const componentRef = useRef(null);
        const [isAtTop,setIsAtTop] = useState(false);

        useEffect(()=>{
            const handleScroll = () => {
                if(componentRef.current){
                    const rect = componentRef.current.getBoundingClientRect();
                    setIsAtTop(rect.top <=0);
                }
            };

            window.addEventListener("scroll",handleScroll);
            return()=>{
                window.removeEventListener("scroll",handleScroll);
            };
        })
    
        const fetchToprestaurant = async ()=>{
            const response = await fetch('http://localhost:5000/top-restaurant-chains');
            const apiData = await response.json();
            setData(apiData);
        }
    
        useEffect(
            ()=>{
                fetchToprestaurant();
            },[]
        )
    return (
        <div className='max-w-[1200px] mx-auto px-2 ' ref={componentRef}>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Madurai</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[99999999] bg-white w-full left-0':''}>
                <div className='max-w-[1200px] mx-auto flex my-4 gap-3 border border-red-500 '>
                    <div className='p-3 rounded-md shadow'>Filter</div>
                    <div className='p-3 rounded-md shadow'>Sort</div>
                </div>
            </div>
            <div className=' grid grid-cols-2 md:grid grid-cols-4 gap-3'>
            {
                data.map(
                    (d,i) =>{
                        return <Card {...d}/>
                    }
                )
            }
            </div>
        </div>
    )
}

