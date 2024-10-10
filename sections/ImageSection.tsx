import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import { SectionProps } from "../components.model";
import TwoColumnSection from "./TwoColumnSection";
import SectionHeader from "./section-header";

export interface ImageSectionProps extends SectionProps {
    imageUrl: string;
    imageAlt: string;
    imageUnoptimized?: boolean;
    reversed?: boolean;
}

const ImageSection: FunctionComponent<PropsWithChildren<ImageSectionProps>> = ({
    imageUrl,
    imageAlt,
    imageUnoptimized = false,
    title,
    subtitle,
    forceLast = false,
    reversed = false,
    overTitleIcon,
    children
}) => {
    return (
        <TwoColumnSection forceLast={forceLast} reversed={reversed}
            left={
                <div className="bg-black flex-1 relative self-stretch flex items-center justify-center">
                    <div className="relative w-4/5 h-4/5 mb-8 md:mb-0">
                        <div className="hidden md:block">
                            <Image src={imageUrl} alt={imageAlt} fill style={{
                                objectFit: 'contain'
                            }} unoptimized={imageUnoptimized} />
                        </div>
                        <div className="block h-64 md:hidden">
                            <Image src={imageUrl} alt={imageAlt} fill
                                style={{
                                    objectFit: 'contain'
                                }} unoptimized={imageUnoptimized} />
                        </div>
                    </div>
                </div>
            }
            right={
                <div className="flex-1 bg-white">
                    <SectionHeader title={title} subtitle={subtitle} overTitleIcon={overTitleIcon} />
                    <div>{children}</div>
                </div>
            }>
        </TwoColumnSection>
    );
}

export default ImageSection;