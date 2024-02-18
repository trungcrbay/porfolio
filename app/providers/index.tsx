'use client'
import { createContext, useContext, useState } from 'react';
export const ContactContext = createContext();

const ContactProvider  = ({children} : any) => {
    const [isSubmitContact, setIsSubmitContact] = useState<boolean>(false);

    return (
        <ContactContext.Provider value={{ isSubmitContact,setIsSubmitContact }}>
            {children}
        </ContactContext.Provider>
    );

}

export default ContactProvider; 