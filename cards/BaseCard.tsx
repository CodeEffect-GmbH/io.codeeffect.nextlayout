import { FunctionComponent, ReactElement } from "react";
import React from "react";
import Title from "../typography/title";
import Text from "../typography/text";
import { ClassNameProps } from "../components.model";

export interface BaseCardProps extends ClassNameProps {
    title: string | ReactElement;
    body: string | ReactElement;
    footer?: ReactElement;
}

const BaseCard: FunctionComponent<BaseCardProps> = ({
    title,
    body,
    footer = null,
    className
}) => {
    return (
        <div className={`bg-white relative flex flex-col overflow-hidden ${className}`}>
            {React.isValidElement(title) ? title : <Title compact className="p-4 md:p-8" level={5}>{title}</Title>}
            <div className="grow shrink relative">
                {React.isValidElement(body) ? body : <Text compact>{body}</Text>}
            </div>
            <div className="relative grow-0 shrink-0">
                {footer && footer}
            </div>
        </div>
    );
}

export default BaseCard;