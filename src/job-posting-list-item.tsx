'use client'

import { FunctionComponent, ReactNode } from "react";
import Title from "./title";
import Paragraph from "./paragraph";
import Button from "./button";

export interface JobPostingListItemProps {
    id: string;
    position: string;
    description: string;
    applyLinkText: string;
    applyLink: string;
    buttonClassName?: string;
    buttonIcon?: ReactNode;
    icon?: ReactNode;
}

const JobPostingListItem: FunctionComponent<JobPostingListItemProps> = (props) => {
    const apply = () => {
        window.open(props.applyLink, '_self');
    };

    return (
        <div className='flex flex-col md:flex-row bg-gray-100 rounded-lg p-4 md:p-8'>
            {props.icon && <div className="flex justify-center items-center mb-4 md:mb-0 md:mr-8">
                {props.icon}
            </div>}
            <div className="flex-1">
                <Title level={5} compact>{props.position}</Title>
                <Paragraph compact>{props.description}</Paragraph>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0 md:ml-8">
                <Button className={props.buttonClassName} icon={props.buttonIcon} onClick={apply}>{props.applyLinkText}</Button>
            </div>
        </div>
    );
}

export default JobPostingListItem;