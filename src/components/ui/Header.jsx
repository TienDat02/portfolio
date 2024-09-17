import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 text-white mx-auto">
            <div className="container flex justify-between items-center ">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        <span className="text-accent">-</span>
                        Dat <span className="text-accent">.</span>
                    </h1>
                </Link>
                <div className="hidden md:block">
                    <Nav />
                </div>
                <div className="md:hidden mx-2">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header