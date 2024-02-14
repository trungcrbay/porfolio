"use client";
import { TypeAnimation } from "react-type-animation";
const Header = () => {

  return (
    <>
      <div className="grid 2xl:grid-cols-12 gap-4 mt-12">
        <div className="2xl:col-span-6 sm:col-span-12 sm:order-1">
          <div className="p-2 banner_text_bg w-1/2 text-center text-white sm:w-full">
            <span className="">Welcome to my Portfolio</span>
          </div>

          <h2 className="text-white text-5xl w-4/5 leading-tight mt-8 sm:w-full">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hi! I am Nguyen Dang Trung - Web development",
                2000,
                "Hi! I am Nguyen Dang Trung - Book lover",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className=" text-5xl w-4/5 leading-tight mt-8 sm:w-full sm:text-xl highlight_text sm:text-center"
              // style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-white mt-8 text-xl sm:text-base sm:text-center">
            I have experience in building scalable, secure and reliable web
            applications using various frameworks and technologies I enjoy
            solving complex problems and learning new skills. I am passionate
            about creating high-quality code that follows best practices and
            industry standards
          </p>
        </div>
        <div className="2xl:col-span-6 sm:col-span-12 sm:order-0">
          <img src="/header-img.svg" className="w-full h-3/4 banner_img" />
        </div>
        
      </div>

      
    </>
  );
};

export default Header;
