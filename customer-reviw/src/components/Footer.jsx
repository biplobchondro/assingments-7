import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#000000]">
    <section className="md:flex justify-between mx-20 py-[80px] text-[#FFFFFF]">

        <div className="w-[350px]">
        <h1 className="font-bold text-[20px] mb-3">CS — Ticket System</h1>
        <p className="text-[#627382]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
        <h2 className="font-semibold mb-3">Company</h2>
        <div className=" grid gap-2 text-[#627382]">
        <a href="">About Us</a>
        <a href="">Our Mission</a>
        <a href="">Contact Saled</a>
        </div>
        </div>
        <div>
        <h3 className="font-semibold mb-3">Services</h3>
        <div className=" grid gap-2 text-[#627382]">
            <a href="">Products & Services</a>
        <a href="">Customer Stories</a>
        <a href="">Download Apps</a>
        </div>
        </div>
        <div>
        <h2 className="font-semibold mb-3">Information</h2>
        <div className=" grid gap-2 text-[#627382]">
            <a href="">Privacy Policy</a>
        <a href="">Terms & Conditions</a>
        <a href="">Join Us</a>
        </div>
        </div>
        <div>
        <h2 className="font-semibold mb-3">Social Links</h2>
        <div className=" grid gap-2 text-[#627382]">
            <a href="">@CS — Ticket System</a>
        <a href="">@CS — Ticket System</a>
        <a href="">@CS — Ticket System</a>
        <a href="">support@cst.com</a>
        </div>
        </div>

    </section>
</footer>


    <nav>
        <div className="grid justify-center text-center text-white py-7 bg-[#000000] text-lg">
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    </nav>
        </div>
    );
};

export default Footer;