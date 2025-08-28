'use client';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { FaApple, FaArrowRight } from "react-icons/fa6";
export default function SidebarVoucher() {
 const menuItems = ["Woman’s Fashion","Men’s Fashion","Electronics","Home & Lifestyle", "Medicine",
                   "Sports & Outdoor","Baby’s & Toys","Groceries & Pets","Health & Beauty",];


 const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const maxIndex = 2; 
  const interval = setInterval(() => {setCurrentIndex(prevIndex => (prevIndex === maxIndex ? 0 : prevIndex + 1)); }, 6000);
return () => clearInterval(interval);}, []);

 return (
   <div className="flex  ml-30 mr-30  p-4">
     <aside className="min-w-[200px] border-r border-gray-200 pr-6">
       <ul className="space-y-4 text-lg font-poppins text-black">
         {menuItems.map((item, idx) => (
           <li key={idx} className="flex justify-between items-center cursor-pointer hover:font-semibold">
             <span>{item}</span>
             {(item === "Woman’s Fashion" || item === "Men’s Fashion") && <span>&gt;</span>}
           </li>))}
       </ul>
     </aside>

     <div className="w-[80%] bg-black relative flex items-center px-10 h-[385px]">
         <div className="flex-1 text-white">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 flex items-center justify-center"> <FaApple /> </span>
              <span className="font-poppins text-lg">iPhone 14 Series</span>
           </div>
           <h2 className="text-5xl font-bold font-poppins mb-4 leading-tight"> Up to 10%<br /> off Voucher</h2>
            <button className="underline text-white flex items-center gap-2 font-poppins text-lg cursor-pointer select-none py-2">Shop Now <FaArrowRight /> </button>
         </div>
        <div className="flex-1 flex justify-end items-center h-full">
          <Image src="data:image/jpeg;base64,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" 
          alt="Phone" width={400} height={300} className="object-contain right-[90] w-150 bottom- "  />
        </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">{[0, 1, 2].map((index) => (
           <span key={index} className={`w-3 h-3 rounded-full ${ index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'  }`}></span>))}
        </div>
      </div>
   </div>
 );
}