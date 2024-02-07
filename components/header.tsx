'use client'
import { useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { GrLinkNext } from "react-icons/gr";
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import clsx from 'clsx';

const Header = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    return (
        <>
            <nav className={clsx("grid 2xl:grid-cols-12 sm:grid-cols-12 gap-4",
                {
                    'opacity-60': openNav === true
                })}>
                <button data-collapse-toggle="navbar-default" type="button"
                    onClick={() => setOpenNav(true)}
                    className="inline-flex hidden absolute right-2 top-6 sm:block items-center  p-2 w-10 h-10 justify-center 
            text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="col-span-4">
                    <img src="/logo.svg" />
                </div>
                <div className="col-span-8 flex justify-between gap-16 sm:hidden items-center">
                    <ul className="text-white list-none flex gap-12 text-slate-400">
                        <li>
                            <button>Home</button>
                        </li>
                        <li>
                            <button>Skills</button>
                        </li>
                        <li>
                            <button>Projects</button>
                        </li>
                    </ul>
                    <ul className="text-white ml-8 list-none flex gap-4 text-slate-400">
                        <li className="w-8 h-8 bg-slate-500 rounded-full relative cursor-pointer">
                            <Link href={'https://www.facebook.com/profile.php?id=100090748884506'}>
                                <BiLogoFacebook className="absolute hard_center_icon" />
                            </Link>

                        </li>
                        <li className="w-8 h-8 bg-slate-500 rounded-full relative cursor-pointer">
                            <Link href={'https://github.com/trungcrbay'}>
                                <BiLogoGithub className="absolute hard_center_icon" />
                            </Link>
                        </li>
                        <li className="w-8 h-8 bg-slate-500 rounded-full relative cursor-pointer">
                            <BiLogoLinkedin className="absolute hard_center_icon" />
                        </li>
                    </ul>
                    <div className="right-0">
                        <button className="p-5 bg-transparent border-white text-white border-2 rounded-lg">
                            Let's connect
                        </button>
                    </div>
                </div>
            </nav>

            <div className="grid 2xl:grid-cols-12 gap-4 mt-12">
                <div className="2xl:col-span-6 sm:col-span-12 sm:order-1">
                    <div className="p-2 banner_text_bg w-1/2 text-center text-white sm:w-full">
                        <span className="">Welcome to my Portfolio</span>
                    </div>

                    <h2 className="text-white text-5xl w-4/5 leading-tight mt-8 sm:w-full">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Hi! I am Nguyen Dang Trung - Web development',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Hi! I am Nguyen Dang Trung - Book lover',
                                2000,
                                'Hi! I am Nguyen Dang Trung - Runner',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-white text-5xl w-4/5 leading-tight mt-8 sm:w-full"
                            // style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className="text-white mt-8 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a dicta, tenetur id autem nihil nulla aliquid
                        laudantium esse reprehenderit nostrum sequi cupiditate debitis facere rerum, nesciunt, sed soluta ab.</p>
                    <div className="p-4 bg-transparent border-white text-white border-2 rounded-lg flex w-1/4 items-center gap-2 mt-8 sm:w-2/3">
                        <span>Let's connect</span>
                        <GrLinkNext className="text-white" />
                    </div>
                </div>
                <div className="2xl:col-span-6 sm:col-span-12 sm:order-0">
                    <img src="/header-img.svg" className="w-full h-3/4 banner_img" />
                </div>
            </div>

            {openNav &&
                <div className="pl-0 pt-0 bg-white fixed top-0 w-60 right-0 h-screen z-50">
                    <IoMdClose className="right-2 top-2 absolute w-8 h-8" onClick={() => setOpenNav(false)} />
                    <ul className="list-none flex flex-col gap-12 text-slate-400">
                        <li className="mt-10">
                            <button>Home</button>
                        </li>
                        <li>
                            <button>Skills</button>
                        </li>
                        <li>
                            <button>Projects</button>
                        </li>
                    </ul>
                    <p>Socials</p>
                    <ul className="list-none flex gap-12 text-slate-400">
                        <li className="w-8 h-8 bg-red-300 rounded-full">
                            <BiLogoFacebook />
                        </li>
                        <li>
                            <BiLogoGithub />
                        </li>
                        <li>
                            <BiLogoLinkedin />
                        </li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Header;