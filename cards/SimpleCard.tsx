import { FunctionComponent, ReactElement } from "react";
import React from "react";
import Title from "../typography/title";
import Text from "../typography/text";

export interface SimpleCardProps {
    title: string;
    description: string | ReactElement;
    footer?: ReactElement;
}

const SimpleCard: FunctionComponent<SimpleCardProps> = ({
    title,
    description,
    footer = null
}) => {
    return (
        <div className="bg-white rounded-lg p-4 md:p-8 flex flex-col gap-4">
            <Title compact level={5}>{title}</Title>
            <div className="flex-1">
                {React.isValidElement(description) ? description : <Text compact>{description}</Text>}
            </div>
            {footer && footer}
        </div>
    );
}

export default SimpleCard;