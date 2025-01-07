import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between p-4 items-center glass rounded mx-4">
            <Link href="/">
                <div className="logo">
                    <p className="font-bold text-xl">Shortify</p>
                </div>
            </Link>
            <ul className="flex justify-between items-center gap-4">
                <Link href="/generate">
                    <button className="bg-pink-200 shadow-lg p-2 rounded">Try Now</button>
                </Link>
                <Link href="https://github.com/Vignesh6236/Shortify">
                    <button className="bg-pink-200 shadow-lg p-2 rounded">Github</button>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
