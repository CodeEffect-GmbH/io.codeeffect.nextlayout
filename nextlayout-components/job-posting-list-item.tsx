'use client'

import { FunctionComponent, ReactNode } from "react";
import Title from "./typography/title";
import Text from "./typography/text";
import Button from "./button";
import { ClassNameProps } from "./components.model";

export interface JobPostingListItemProps extends ClassNameProps {
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
        <div className={`flex flex-col md:flex-row rounded-lg p-4 md:p-8 ${props.className ? props.className : 'bg-gray-100'}`}>
            {props.icon && <div className="flex justify-center items-center mb-4 md:mb-0 md:mr-8">
                {props.icon}
            </div>}
            <div className="flex-1">
                <Title level={5} compact>{props.position}</Title>
                <Text compact>{props.description}</Text>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0 md:ml-8">
                <Button className={props.buttonClassName} icon={props.buttonIcon} onClick={apply}>{props.applyLinkText}</Button>
            </div>
        </div>
    );
}

export default JobPostingListItem;