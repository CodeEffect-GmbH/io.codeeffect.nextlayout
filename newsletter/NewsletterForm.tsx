'use client'

import { FunctionComponent, useState } from "react";
import Button from "../button";
import Text from "../typography/text";

export interface NewsletterFormProps {
    submitApiUrl: string;
    sendLabel: string;
    placeholderText: string;
    confirmationMessage: string;
    onSubmit: (email: string) => void;
}

const NewsletterForm: FunctionComponent<NewsletterFormProps> = (props) => {
    const [email, setEmail] = useState<string>('');
    const [sent, setSent] = useState<boolean>(false);

    const submitForm = async () => {
        if (email) {
            props.onSubmit(email);
        }

        await fetch(props.submitApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        });

        resetForm();
        setSent(true);
    }

    const resetForm = () => {
        setEmail('');
        setSent(false);
    }

    return (
        <div>
            {!sent &&
                <div className="flex">
                    <input value={email} placeholder={props.placeholderText} className="rounded-tl-lg rounded-bl-lg text-black px-4 py-2 md:py-4 text-1xl lg:text-2xl" type="email"
                        onChange={e => setEmail(e.target.value)} />
                    <Button className="bg-white rounded-none rounded-tr-lg rounded-br-lg" icon={<div className="w-6 h-6 text-white" onClick={submitForm}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24"><title>{props.sendLabel}</title><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /></svg>
                    </div>} />
                </div>}
            {sent &&
                <div className="text-center">
                    <Text>{props.confirmationMessage}</Text>
                </div>}
        </div>
    );
}

export default NewsletterForm;