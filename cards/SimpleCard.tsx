import { FunctionComponent, ReactElement } from "react";
import React from "react";
import Title from "../typography/title";
import Text from "../typography/text";
import LinkEx from "../link-ex";

export interface SimpleCardProps {
    title: string;
    description: string | ReactElement;
}

const SimpleCard: FunctionComponent<SimpleCardProps> = ({
    title,
    description
}) => {
    return (
        <div className="bg-white rounded-lg p-4 md:p-8 flex flex-col gap-4">
            <Title compact level={5}>{title}</Title>
            {React.isValidElement(description) ? description : <Text compact>{description}</Text>}
            <LinkEx href="/services" title="Mehr erfahren">Mehr erfahren</LinkEx>
        </div>
    );
}

export default SimpleCard;