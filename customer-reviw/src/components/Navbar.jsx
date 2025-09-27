import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header className="bg-[#FFFFFF]">
        <nav className="md:flex justify-between place-items-center w-auto md:mx-20 py-5">
            <div className="text-2xl font-bold text-black">
                <h3>CS — Ticket System</h3>
            </div>
              <div className="md:flex place-items-center gap-10 text-black font-semibold text-sm">
                <a href="">Home</a>
                <a href="">FAQ</a>
                <a href="">Changelog</a>
                <a href="">Blog</a>
                <a href="">Download</a>
                <a href="">Contact</a>
              <div>
                <button className="bg-[#632EE3] font-semibold text-white text-sm p-2 rounded-sm">➕ New Ticket</button>
              </div>
            </div>
        </nav>
    </header>
        </div>
    );
};

export default Navbar;