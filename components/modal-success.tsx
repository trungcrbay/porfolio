import { ContactContext } from "@/app/providers";
import Image from "next/image";
import { useContext } from "react";

const ModalSuccess = () => {
    let { isSubmitContact, setIsSubmitContact } = useContext<any>(ContactContext);

    return (
        <>
            <div className=" overflow-y-auto overflow-x-hidden fixed top-1/4 sm:top-1/4 right-0 left-0  z-50 justify-center items-center w-1/3 mx-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="p-2 md:p-5  space-y-4">
                            <Image alt="image success" src="/icons8-success.gif" width={100} height={100} className="mx-auto p-5 " />
                            <h3 className="text-2xl text-center font-semibold text-gray-900 dark:text-white">
                                Success
                            </h3>
                            <p className="text-xl text-center text-gray-900 dark:text-white">
                                Thanks for the contact
                            </p>
                        </div>

                        <div className="p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={() => setIsSubmitContact(false)}
                                className="text-white bg-blue-700 mx-auto block hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalSuccess;