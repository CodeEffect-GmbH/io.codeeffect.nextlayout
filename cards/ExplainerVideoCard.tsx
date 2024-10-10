import { FunctionComponent, PropsWithChildren } from "react";
import React from "react";
import { ClassNameProps } from "../components.model";
import SectionHeader, { SectionHeaderProps } from "../sections/section-header";

export interface ExplainerVideoCardProps extends ClassNameProps, SectionHeaderProps {
    videoSrc: string;
}

const ExplainerVideoCard: FunctionComponent<PropsWithChildren<ExplainerVideoCardProps>> = ({
    videoSrc,
    title,
    subtitle,
    overTitleIcon,
    align,
    anchorId,
    className,
    children
}) => {
    return (
        <div className={`bg-white flex flex-col overflow-hidden p-4 md:p-8 h-[28rem] ${className}`}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 h-full'>
                <div className="flex flex-col justify-between">
                    <SectionHeader title={title} subtitle={subtitle} overTitleIcon={overTitleIcon} align={align} anchorId={anchorId} />
                    <div className="h-full">
                        {children}
                    </div>
                </div>
                <div className="relative">
                    <video className="absolute h-full w-full left-0 top-0 object-cover"
                        autoPlay muted loop controls={false}>
                        <source src={videoSrc} type="video/webm" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default ExplainerVideoCard;