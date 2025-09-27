import React, { use, useState } from 'react';
import Banner from './Banner';

const Cart = ({fetchPromise}) => {
    const customerData = use(fetchPromise)
    const [clickCount, setClickCount] = useState(0);
    const [clickedCard, setClickedCard] = useState([]);

    

    const handleCardClick = (issues) => {
    setClickCount(cart => cart + 1);
    setClickedCard(prev => [...prev, issues]);;
    alert(`You clicked on "${issues}"`);
}
    
    
    
    return (
        <div className="bg-[#F5F5F5]">
        <Banner customerData={customerData} clickCount={clickCount}/>

        <div className=" text-black mx-20 font-bold text-[25px]">
            <h1>Customer Tickets</h1>
            </div>
        
        <div className="bg-[#F5F5F5]">
            
            <section className=" grid-flow-row mx-auto w-11/12 py-10 md:grid grid-cols-12 gap-8">
            <div className="grid grid-cols-1 col-span-9 md:grid-cols-2 gap-5">

        {
                customerData.map(issue => {
                    return<div key={issue.id} onClick={() => handleCardClick(issue)} className="shadow-xl h-auto p-5 bg-white rounded-lg">
        <div className="flex justify-between text-black mb-3">
        <h2 className="font-semibold text-[20px]">{issue.title}</h2>
        <p className={`text-center rounded-2xl py-1 px-2 ${issue.status == '🟢 Open'?
            'bg-green-200 text-green-500 ' :'bg-yellow-200 text-yellow-500'}`}>{issue.status}</p>
        </div>
        <p className="text-[#627382] font-semibold">{issue.description}</p>
        <div className="flex justify-between mt-3">
        <div className="flex gap-5">
            <p className="text-[#627382] font-semibold">#1003</p>
            <p className={`font-semibold text-black ${issue.priority=='HIGH' ? "text-red-500" : issue.priority == 'MEDIUM'?
                "text-yellow-500" : 'text-green-500'}`}>{issue.priority}</p>
        </div>
        <div className="flex text-[#627382] gap-5">
            <p>{issue.customer}</p>
            <p>{issue.createdAt}</p>
        </div>
        </div>

    </div>


                    
                })
            }
            

            </div>

            <div className='col-span-3 w-full bg-[#F5F5F5] px-4'>
                <h1 className=' text-black  mx-20 font-bold text-[25px]'>Task Status</h1>
                    
                {clickedCard.map((carts) => (
                    <div key={carts.id} className="bg-white mt-4 rounded-lg p-4">
                    <div className="font-semibold text-lg text-[#111111]">
                <h3>{carts.title}</h3>
            </div>
            <div className="btn text-white w-full rounded-lg bg-[#02A53B] mt-3">
                <button>Complete</button>
            </div>
            </div>
                ))}
                </div>

            </section>
        </div>
            
            
        </div>
    );
};

export default Cart;