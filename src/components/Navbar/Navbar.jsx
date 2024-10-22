import React, { useState } from 'react';
import Link from '../shared/Link';
import { RiMenuFill } from 'react-icons/ri'; 
import { RxCross2 } from 'react-icons/rx';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarData = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Recipes",
            link: "/recipes",
            submenu: [
                {
                    name: "Breakfast",
                    link: "/recipes/breakfast"
                },
                {
                    name: "Lunch",
                    link: "/recipes/lunch"
                },
                {
                    name: "Dinner",
                    link: "/recipes/dinner"
                }
            ]
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ];

    return (
        <div className='max-w-[1200px] lg:mx-auto mx-5 flex items-center justify-between mt-6'>
            <div className='text-2xl md:hidden block relative'>
                {!isOpen ? (
                    <RiMenuFill onClick={() => setIsOpen(!isOpen)} aria-controls="navbar-menu" aria-expanded={isOpen} />
                ) : (
                    <RxCross2 onClick={() => setIsOpen(!isOpen)} aria-controls="navbar-menu" aria-expanded={isOpen} />
                )}
                <div className={`${!isOpen ? "hidden" : "block"} flex flex-col text-base bg-white text-black p-3 rounded-md mt-2 absolute`} id="navbar-menu">
                    {
                        navbarData.map((data, i) => (
                            <Link key={i} href={data}>
                                {data.name}
                                {data.submenu && (
                                    <div className='pl-4'>
                                        {data.submenu.map((subData, j) => (
                                            <Link key={j} href={subData} className="block text-gray-600 hover:text-black">{subData.name}</Link>
                                        ))}
                                    </div>
                                )}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='md:flex justify-center gap-10 hidden'>
                {
                    navbarData.map((data, i) => (
                        <Link key={i} href={data}>
                            {data.name}
                            {data.submenu && (
                                <div className='pl-4'>
                                    {data.submenu.map((subData, j) => (
                                        <Link key={j} href={subData} className="block text-gray-600 hover:text-black">{subData.name}</Link>
                                    ))}
                                </div>
                            )}
                        </Link>
                    ))
                }
            </div>
            <FaUserCircle  className='text-2xl'/>
        </div>
    );
};

export default Navbar;
