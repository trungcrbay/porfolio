'use client'
import { createContext, useContext, useState } from 'react';
import Contact from './contact';
import MailchimpFormContainer from './mailchimp_sucribes';
import clsx from "clsx";
import { ContactContext } from '@/app/providers';

const WrapperContactPage = (props: any) => {
    let { isSubmitContact,setIsSubmitContact } = useContext<any>(ContactContext);

    return (
        <div className={clsx("min-h-screen",{
            "opacity-60": isSubmitContact === true,
        })}>
            <Contact/>
            <MailchimpFormContainer />
        </div>
    );

}

export default WrapperContactPage; 