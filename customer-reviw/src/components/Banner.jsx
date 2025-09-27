import React from 'react';
import Cart from './Cart';

const Banner = ({ customerData, clickCount }) => {
    customerData.filter(element => element.status === "In-Progress" || element.status === "Open"
    ).length;
 
    
    
    return (
        <div>
            <section className="bg-[#F5F5F5]">
        <div className="grid grid-cols-2 gap-5 md:mx-20 py-[80px]">
    <div className="flex flex-col items-center justify-center font-bold gap-5 rounded-lg 
    bg-[#844AEB] h-[250px] bg-no-repeat bg-[url('./assets/vector1.png')]">
    <h2 className="text-[20px]">In-Progress</h2>
    <p className="text-5xl">{clickCount}</p>
    </div>

    <div className="flex flex-col gap-5 items-center justify-center font-bold rounded-lg
    bg-[#54CF68]  bg-no-repeat bg-[url('./assets/vector1.png')]">
    <h2 className="text-[20px]">Resolved</h2>
    <p className="text-5xl">0</p>
    </div>
        </div>
    </section>
        </div>
    );
};

export default Banner;