'use client'
import React from 'react';
//@ts-ignore
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Subscribe from './subcribes';

const MailchimpFormContainer = (props : any) => {

    const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=c5437aaabfe405bb713250309&id=0a80682db7`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }:any) => (
                    <Subscribe
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;