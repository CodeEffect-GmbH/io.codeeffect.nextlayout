import { FunctionComponent, ReactElement } from "react";
import React from "react";
import Title from "../typography/title";
import Text from "../typography/text";

export interface BaseCardProps {
    title: string | ReactElement;
    body: string | ReactElement;
    footer?: ReactElement;
}

const BaseCard: FunctionComponent<BaseCardProps> = ({
    title,
    body,
    footer = null
}) => {
    return (
        <div className="bg-white rounded-lg p-4 md:p-8 flex flex-col gap-4">
            {React.isValidElement(title) ? title : <Title compact level={5}>{title}</Title>}
            <div className="flex-1">
                {React.isValidElement(body) ? body : <Text compact>{body}</Text>}
            </div>
            {footer && footer}
        </div>
    );
}

export default BaseCard;