import React from 'react'
import { useEffect, useState } from "react";


export default function Textcomp() {
    const [count, setcount] = useState(1);

    const points = [
       
          
       
      ];
      useEffect(() => {
        const handleScroll = () => {
          setcount(Math.min(Math.floor(window.scrollY / 200) + 1, points.length));
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    

  return (<>
    <div className="p-6 min-h-screen flex flex-col items-center bg-gray-900 text-black">
    <h2 className="text-3xl font-bold mb-6">Our Planned Approach</h2>
    <div className="space-y-4 max-w-xl">
      {points.slice(0, count).map((point, index) => (
        <div key={index} className="p-4 bg-gray-800 rounded-xl shadow-lg text-lg">
          {point}
        </div>
      ))}
    </div>
  </div>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />hdsjkdalaf
  </> )
}
