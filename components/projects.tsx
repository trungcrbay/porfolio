"use client";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import { useRouter } from "next/navigation";

const Projects = (props: any) => {
  const { dataProject } = props;
  const router = useRouter();

  return (
    <>
      <div className="grid 2xl:grid-cols-12 gap-4">
        <div className="col-span-6 text-white sm:col-span-12">
          {dataProject.map((data: any, index: any) => {
            return (
              <div className="flex gap-4 mt-8 mb-8 sm:block relative ">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND}/images/uploads/${data.image}`}
                  alt={`Project-${index}`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-1/2 sm:w-full myDIV h-auto rounded-lg object-cover hover:opacity-60 cursor-pointer"
                />

                <button
                  onClick={() => router.push(`${data.demo}`)}
                  className="mt-2 animate__animated animate__bounceIn center-button-hover hover:block hide sm:block sm:static text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  View Demo
                </button>

                <div>
                  <h2 className="text-3xl sm:text-xl">{data.title}</h2>
                  <p className="text-slate-300 mt-2 sm:text-xs">
                    {data.description}
                  </p>
                  <h3 className="mt-2">Tech Stacks:</h3>
                  <div className="flex gap-2">
                    {data.techStack.detail.map((tech: any, index: any) => {
                      return (
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND}/images/uploads/${tech.path}`}
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
