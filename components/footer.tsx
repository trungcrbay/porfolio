import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";

import { FaAddressBook, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  
  return (
    <div className="bg-slate-300 2xl:p-12 sm:p-4">
      <div className="text-center text-2xl">Stay Connected</div>
      <ul className="text-white mt-4 list-none flex gap-4 text-slate-400 justify-center">
        <li className="">
          <Link
            href={"https://www.facebook.com/profile.php?id=100090748884506"}
          >
            <BiLogoFacebook className="w-8 h-8 social_icon hover:text-black cursor-pointer" />
          </Link>
        </li>
        <li className="">
          <Link href={"https://youtube.com/@trungcrbay"}>
            <BiLogoYoutube className="w-8 h-8 social_icon hover:text-black cursor-pointer" />
          </Link>
        </li>
        <li className="">
          <Link href={"https://github.com/trungcrbay"}>
            <BiLogoGithub className="w-8 h-8 social_icon hover:text-black cursor-pointer" />
          </Link>
        </li>
        <li className="">
          <BiLogoLinkedin className="w-8 h-8 social_icon hover:text-black cursor-pointer" />
        </li>
      </ul>

      <div className="grid 2xl:grid-cols-12 mt-5">
        <div className="col-span-3 sm:col-span-6 mt-2">
          <h2>Nguyen Dang Trung</h2>
          <p className="mt-2 sm:w-full sm:text-base">
            Copyright by © TrungCr7 2024
          </p>
        </div>

        <div className="col-span-3 sm:col-span-6 mt-2">
          <div className="flex items-center gap-2">
            <FaAddressBook />
            <h2 className="sm:text-base">Address</h2>
          </div>
          <p className="mt-2 sm:w-full text-base">
            Bac Tu Liem district, Ha Noi, Vietnam
          </p>
        </div>

        <div className="col-span-3 sm:col-span-6 mt-2">
          <div className="flex items-center gap-2">
            <FaPhone />
            <h2>Phone</h2>
          </div>
          <p className="mt-2 text-base">+84347196217</p>
        </div>

        <div className="col-span-3 sm:col-span-6 mt-2">
          <div className="flex items-center gap-2">
            <IoMdMail />
            <h2>Email</h2>
          </div>
          <p className="mt-2 sm:w-full sm:hidden">trungnguyenjr123@gmail.com</p>
          <p className="mt-2 sm:w-full 2xl:hidden sm:block">
            trungnguyenjr123@ gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
