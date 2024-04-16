import React from "react";

function Navbar () {
    return (
        <>
            <nav className="h-20 w-screen border-2 border-gray-400 flex justify-between px-4 items-center">
                <h2 className="text-2xl font-bold">Bazar</h2>
                <ul className="flex gap-16">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <input type="text" className="h-4/5 w-2/5 border-2 border-red-400 rounded-xl" />
                <button>Login</button>
                <button>Signup</button>
            </nav>
        </>
    );
}

export default Navbar;