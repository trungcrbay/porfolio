"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const listImage = [
  "./light-html.png",
  "./light-css.png",
  "./javascript.png",
  "./light-react.png",
  "./light-nextjs.png",
  "./light-express.png",
  "./light-nestjs.png",
];

const Skills = () => {
  return (
    <div className="text-black skill_box_width bg-slate-300 mx-auto rounded-lg p-12 sm:p-3 sm:w-full mt-12">
      <h1 className="text-center text-4xl">Skills</h1>
      <p className="text-center mt-8 sm:hidden">
        I have experience in building scalable, secure and reliable web
        applications using various frameworks and technologies I enjoy solving
        complex problems and learning new skills. I am passionate about creating
        high-quality code that follows best practices and industry standards. I
        am always looking for new challenges and opportunities to grow as a
        developer.
      </p>
      <Carousel responsive={responsive}>
        {listImage &&
          listImage.map((item: any, index: number) => {
            return (
              <div>
                <img
                  src={item}
                  className="w-3/4 h-3/4 sm:w-full sm:h-1/2 pt-4"
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Skills;
