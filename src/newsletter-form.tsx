'use client'

import { ChangeEvent, ChangeEventHandler, FunctionComponent, useState } from "react";
import Button from "./button";

export interface NewsletterFormProps {
    onSubmit: (email: string) => void;
}

const NewsletterForm: FunctionComponent<NewsletterFormProps> = (props) => {
    const [email, setEmail] = useState<string | null>(null);

    const submit = () => {
        if (email) {
            props.onSubmit(email);
        }
    }

    return (
        <div className="flex">
            <input placeholder="Ihre E-Mail Adresse" className="rounded-tl-lg rounded-bl-lg text-black px-4 py-2 md:py-4 text-1xl lg:text-2xl" type="email"
                onChange={e => setEmail(e.target.value)} />
            <Button className="bg-white rounded-none rounded-tr-lg rounded-br-lg" icon={<div className="w-6 h-6 text-black" onClick={submit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><title>send</title><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /></svg>
            </div>} />
        </div>
    );
}

export default NewsletterForm;