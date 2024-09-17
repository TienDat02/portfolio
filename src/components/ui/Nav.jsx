"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'work',
        path: '/work',
    },
]

const Nav = () => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <nav className='flex gap-10'>
            {links.map((link, index) => (
                <Link 
                    key={index} 
                    href={link.path} 
                    className={`${link.path === pathName ? 'text-accent border-b-2 border-accent' : ''} hover:text-hover text-l`}>
                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;