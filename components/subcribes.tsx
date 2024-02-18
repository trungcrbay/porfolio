'use client'
import React, { useEffect, useRef, useState } from 'react';


const Subscribe = ({ status, message, onValidated }: any) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        email && onValidated({
            EMAIL: email,
        });
    }

    return (
        <>
            <div className="p-16 sm:p-8 bg-white rounded-lg grid grid-cols-12">
                <h1 className="text-black text-3xl sm:text-xl col-span-6 sm:col-span-12">Subscribe to our Newsletter & Never miss lastest updates</h1>

                <form className="col-span-6 sm:col-span-12 sm:mt-8" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    {status === "sending" && (
                        <div className="text-black">
                            Sending...
                        </div>
                    )}
                    {status === "error" && (
                        <div
                            className="text-red-500"
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    {status === "success" && (
                        <div
                            className="text-green-500"
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    <div className="relative w-full">
                        <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-4 ps-10 sm:ps-4 text-sm text-gray-900 border border-purple-700 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        <button type="submit" formValues={email} className="text-white absolute end-2.5 bottom-2.5 send-button-bg focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Subscribe;