"use client";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

const dataProject = [
  {
    img: "/project1.jpg",
    title: "Real Madrid Landing Page",
    description:
      "Project summary goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. In metus nunc, fringilla ut viverraut, placerat sed nisl. Ut eu nisi ut arcu volutpat vehicula.",
    techStack: [
      "/tech-icons/HTML5.svg",
      "/tech-icons/CSS3.svg",
      "/tech-icons/JavaScript.svg",
    ],
    source: "https://github.com/trungcrbay/Real-Madrid",
  },
  {
    img: "/project2.jpg",
    title: "Book Ecommerce",
    description:
      "Project summary goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. In metus nunc, fringilla ut viverraut, placerat sed nisl. Ut eu nisi ut arcu volutpat vehicula.",
    techStack: [
      "/tech-icons/React.svg",
      "/tech-icons/Redux.svg",
      "/tech-icons/Ant Design.svg",
      "/tech-icons/Vite.js.svg",
      "/tech-icons/JavaScript.svg",
      "/tech-icons/Sass.svg",
    ],
    source: "https://github.com/trungcrbay/React_ANTD_ECOMMERCE",
  },
  {
    img: "/project3.jpg",
    title: "Quiz App",
    description:
      "Project summary goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. In metus nunc, fringilla ut viverraut, placerat sed nisl. Ut eu nisi ut arcu volutpat vehicula.",
    techStack: [
      "/tech-icons/Next.js.svg",
      "/tech-icons/Material UI.svg",
      "/tech-icons/Sass.svg",
    ],
    source: "https://github.com/trungcrbay/QuizApp",
  },
  {
    img: "/project4.jpg",
    title: "Laptop Shop",
    description:
      "Project summary goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. In metus nunc, fringilla ut viverraut, placerat sed nisl. Ut eu nisi ut arcu volutpat vehicula.",
    techStack: [
      "/tech-icons/PHP.svg",
      "/tech-icons/MySQL.svg",
      "/tech-icons/Bootstrap.svg",
      "/tech-icons/HTML5.svg",
      "/tech-icons/CSS3.svg",
      "/tech-icons/Javascript.svg",
    ],
    source: "https://github.com/trungcrbay/Ecomerce-PHP",
  },
  {
    img: "/project5.jpg",
    title: "Porfolio",
    description:
      "Project summary goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. In metus nunc, fringilla ut viverraut, placerat sed nisl. Ut eu nisi ut arcu volutpat vehicula.",
    techStack: [
      "/tech-icons/Next.js.svg",
      "/tech-icons/Tailwind CSS.svg",
      "/tech-icons/CSS3.svg",
    ],
    source: "https://github.com/trungcrbay/porfolio",
  },
];

const Projects = () => {
  return (
    <>
      <div className="grid 2xl:grid-cols-12 gap-4">
        <div className="col-span-6 text-white sm:col-span-12">
          {dataProject.map((data: any, index: any) => {
            return (
              <div className="flex gap-4 mt-8 mb-8 sm:block relative ">
                <Image
                  src={`${data.img}`}
                  alt={`Project-${index}`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-1/2 sm:w-full myDIV h-auto rounded-lg object-cover hover:opacity-60 cursor-pointer"
                />
                <button className="mt-2 animate__animated animate__bounceIn center-button-hover hover:block hide sm:block sm:static text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  View Demo
                </button>
                <div>
                  <h2 className="text-3xl sm:text-xl">{data.title}</h2>
                  <p className="text-slate-300 mt-2 sm:text-xs">
                    {data.description}
                  </p>
                  <h3 className="mt-2">Tech Stacks:</h3>
                  <div className="flex gap-2">
                    {data.techStack.map((tech: any, index: any) => {
                      return (
                        <img
                          src={`${tech}`}
                          style={{ width: "25px", height: "25px" }}
                        />
                      );
                    })}
                  </div>
                  <Link href={`${data.source}`}>
                    <button className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      View Source
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-6 sm:hidden">
          <Image
            src="/astrounaut.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <Image
            src="/prj-astronaut.png"
            width={500}
            height={500}
            className="sm:hidden"
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
