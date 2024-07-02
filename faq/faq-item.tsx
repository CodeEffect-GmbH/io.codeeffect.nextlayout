'use client'

import { FunctionComponent, PropsWithChildren, useState } from "react";
import Title from "../typography/title";
import Text from "../typography/text";
import { ClassNameProps } from "../components.model";

export interface FAQItemProps extends ClassNameProps {
    question: string;
}

const FAQItem: FunctionComponent<PropsWithChildren<FAQItemProps>> = ({
    question,
    className,
    children
}) => {
    const [expand, setExpand] = useState<boolean>(false);

    const toggle = () => {
        setExpand(!expand);
    };

    return (
        <div className={`p-4 md:px-8 cursor-pointer ${className ? className : 'bg-gray-100'}`} onClick={toggle}>
            <div className={`flex justify-between items-center transition-all ${expand ? 'mb-4' : 'mb-0'}`} onClick={toggle}>
                <Title level={5} compact>{question}</Title>
                <div className={`ml-4 shrink-0 w-10 md:w-12 h-10 md:h-12 transition-transform ${expand ? 'rotate-180' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </div>
            </div>
            <div className={`${expand ? 'h-auto' : 'h-0 hidden'}`}>
                <Text>{children}</Text>
            </div>
        </div>
    );
}

export default FAQItem;