import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import Title from "./title";
import MaxWidthContainer from "./max-width-container";
import Section from "./section";

export interface ImageSectionProps {
    imageUrl: string;
    title: string;
    overTitle: string;
    reversed?: boolean;
}

const ImageSection: FunctionComponent<PropsWithChildren<ImageSectionProps>> = ({
    imageUrl,
    title,
    overTitle,
    reversed = false,
    children
}) => {
    return (
        <Section>
            <MaxWidthContainer>
                <div className={`flex items-center ${reversed ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}>
                    <div className="flex-1 relative self-stretch flex items-center justify-center">
                        <div className="relative w-4/5 h-4/5 mb-8 md:mb-0">
                            <div className="hidden md:block">
                                <Image src={imageUrl} alt={title} fill />
                            </div>
                            <div className="block md:hidden">
                                <Image src={imageUrl} alt={title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={1}
                                    height={1} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-2 md:mb-4">
                            <Title level={5} uppercase compact>{overTitle}</Title>
                        </div>
                        <Title level={2}>{title}</Title>
                        <div>{children}</div>
                    </div>
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default ImageSection;