import { FunctionComponent } from "react";
import React from "react";
import Title from "../typography/title";
import Text from "../typography/text";
import Image from "next/image";

export interface TestimonialCardProps {
    imageSrc: string;
    name: string;
    position: string;
    text: string;
}

const TestimonialCard: FunctionComponent<TestimonialCardProps> = ({
    imageSrc,
    name,
    position,
    text
}) => {
    return (
        <div className="bg-white rounded-lg p-4 md:p-8 flex flex-col gap-4">
            <div className="relative">
                <Image className="rounded-full" src={imageSrc} alt={name} width={64} height={64} />
            </div>
            <div>
                <Title compact level={5}>{name}</Title>
                <Text level={2}>{position}</Text>
            </div>
            <div className="flex-1">
                <Text compact>{text}</Text>
            </div>
        </div>
    );
}

export default TestimonialCard;