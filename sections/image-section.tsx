import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import MaxWidthContainer from "./max-width-container";
import Section from "./section";
import SectionHeader from "./section-header";
import { SectionProps } from "../components.model";

export interface ImageSectionProps extends SectionProps {
    imageUrl: string;
    imageAlt: string;
    reversed?: boolean;
}

const ImageSection: FunctionComponent<PropsWithChildren<ImageSectionProps>> = ({
    imageUrl,
    imageAlt,
    title,
    subtitle,
    forceLast = false,
    reversed = false,
    overTitleIcon,
    children
}) => {
    return (
        <Section forceLast={forceLast}>
            <MaxWidthContainer>
                <div className={`flex items-center ${reversed ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}>
                    <div className="flex-1 relative self-stretch flex items-center justify-center">
                        <div className="relative w-4/5 h-4/5 mb-8 md:mb-0">
                            <div className="hidden md:block">
                                <Image src={imageUrl} alt={imageAlt} fill style={{
                                    objectFit: 'contain'
                                }} />
                            </div>
                            <div className="block h-64 md:hidden">
                                <Image src={imageUrl} alt={imageAlt} fill
                                    style={{
                                        objectFit: 'contain'
                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <SectionHeader title={title} subtitle={subtitle} overTitleIcon={overTitleIcon} />
                        <div>{children}</div>
                    </div>
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default ImageSection;