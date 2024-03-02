'use client'
import Image from "next/image";
import ClientPortal from "./ClientPortal";
import { useContext, useState } from "react";
import { ContactContext } from "@/app/providers";
import ModalSuccess from "./modal-success";

const Contact = () => {
  let { isSubmitContact, setIsSubmitContact } = useContext<any>(ContactContext);

  const [userContactData, setUserContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    content: ""
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserContactData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmitContactForm = async (e?: React.FormEvent<HTMLInputElement>) => {
    e!.preventDefault();
    setIsSubmitContact(!isSubmitContact);
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/v1/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          
        },
        body: JSON.stringify({
          firstName: userContactData.firstName,
          lastName: userContactData.lastName,
          email: userContactData.email,
          phone: userContactData.phone,
          content: userContactData.content,
        }),
      });


      const data = await res.json();

      if (data.errorCode === 0) {
        setUserContactData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          content: ""
        });
      } else {
        console.log("Error in response:", data.errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-12 mt-8 text-white">
        <div className="col-span-6 sm:col-span-12">
          <Image
            width={600}
            height={700}
            alt="contactimage"
            src="/contact-img.svg"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <h1 className="text-3xl sm:text-center">Get in touch</h1>

          {/* @ts-ignore */}
          <form className="mb-8" onSubmit={handleSubmitContactForm}>
            <div className=" grid grid-cols-6 gap-4">
              <div className="mb-5 mt-5 col-span-3 sm:col-span-12">
                <input
                  value={userContactData.firstName}
                  type="text"
                  name="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5 mt-5 col-span-3 sm:col-span-12">
                <input
                  type="text"
                  name="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                  value={userContactData.lastName}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className=" grid grid-cols-6 gap-4">
              <div className="mb-5 mt-5 col-span-3 sm:col-span-12">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  value={userContactData.email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 mt-5 col-span-3 sm:col-span-12">
                <input
                  type="text"
                  name="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phone"
                  value={userContactData.phone}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="">
              <div className="mb-5 mt-5 col-span-12">
                <textarea
                  id="message"
                  //@ts-ignore
                  name="content"
                  //@ts-ignore
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  value={userContactData.content}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/5 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <ClientPortal
        selector="modal-success"
        show={isSubmitContact}
      >
        <ModalSuccess />
      </ClientPortal>
    </>
  );
};

export default Contact;
