import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import { SectionProps } from "../components.model";
import TwoColumnSection from "./TwoColumnSection";
import SectionHeader from "./section-header";
import BasicSection from "./basic-section";

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
        <>
            <TwoColumnSection className="hidden lg:flex" forceLast={forceLast} reversed={reversed}
                left={
                    <div className="relative w-full h-full">
                        <Image src={imageUrl} alt={imageAlt} fill style={{
                            objectFit: 'cover'
                        }} unoptimized={imageUnoptimized} />
                    </div>
                }
                right={
                    <div>
                        <SectionHeader title={title} subtitle={subtitle} overTitleIcon={overTitleIcon} />
                        <div>{children}</div>
                    </div>
                }>
            </TwoColumnSection>
            <BasicSection className="flex lg:hidden" forceLast={forceLast} title={title} subtitle={subtitle} overTitleIcon={overTitleIcon}>
                <div className="relative w-full h-80">
                    <Image src={imageUrl} alt={imageAlt} fill style={{
                        objectFit: 'cover'
                    }} unoptimized={imageUnoptimized} />
                </div>
                <div className="mt-4 md:mt-8">{children}</div>
            </BasicSection>
        </>
    );
}

export default ImageSection;