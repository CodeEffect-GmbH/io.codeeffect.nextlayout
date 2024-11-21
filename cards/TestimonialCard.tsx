import { FunctionComponent } from "react";
import React from "react";
import Title from "../typography/title";
import Text from "../typography/text";
import Image from "next/image";

export interface TestimonialCardProps {
    imageSrc?: string;
    name: string;
    position: string;
    text: string;
    showStars?: boolean;
}

const TestimonialCard: FunctionComponent<TestimonialCardProps> = ({
    imageSrc,
    name,
    position,
    text,
    showStars = false
}) => {
    return (
        <div className="h-full relative bg-white rounded-lg p-4 md:p-8 flex flex-col gap-4">
            {imageSrc &&
                <div className="relative">
                    <Image className="rounded-full" src={imageSrc} alt={name} width={64} height={64} />
                </div>
            }
            <div>
                <Title compact level={5}>{name}</Title>
                <Text level={2}>{position}</Text>
            </div>
            <div className="flex-1">
                <Text compact>{text}</Text>
            </div>

            {showStars &&
                <div className="absolute top-0 right-0 p-4 md:p-8 flex text-amber-300">
                    <div className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><title>{name}</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </div>
                    <div className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><title>{name}</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </div>
                    <div className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><title>{name}</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </div>
                    <div className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><title>{name}</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </div>
                    <div className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><title>{name}</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </div>
                </div>
            }
        </div>
    );
}

export default TestimonialCard;