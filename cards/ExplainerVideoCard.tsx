import { FunctionComponent, PropsWithChildren } from "react";
import React from "react";
import { ClassNameProps } from "../components.model";
import SectionHeader, { SectionHeaderProps } from "../sections/section-header";

export interface ExplainerVideoCardProps extends ClassNameProps, SectionHeaderProps {
    videoSrc: string;
    videoPosterSrc: string;
    videoPlayerClassName?: string;
}

const ExplainerVideoCard: FunctionComponent<PropsWithChildren<ExplainerVideoCardProps>> = ({
    videoSrc,
    videoPosterSrc,
    videoPlayerClassName,
    title,
    subtitle,
    overTitleIcon,
    align,
    className,
    children
}) => {
    return (
        <>
            <div className={`hidden bg-white lg:flex flex-col overflow-hidden p-4 md:p-8 h-[28rem] ${className}`}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 h-full'>
                    <div className="flex flex-col justify-between">
                        <SectionHeader title={title} subtitle={subtitle} overTitleIcon={overTitleIcon} align={align} />
                        <div className="h-full">
                            {children}
                        </div>
                    </div>
                    <div className="relative">
                        <video className={`absolute h-full w-full left-0 top-0 object-cover ${videoPlayerClassName}`} controls
                            poster={videoPosterSrc}>
                            <source src={videoSrc} type="video/webm" />
                        </video>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col lg:hidden ${className}`}>
                <SectionHeader title={title} subtitle={subtitle} overTitleIcon={overTitleIcon} align={align} />
                <div className="relative h-[14rem]">
                    <video className={`absolute h-full w-full left-0 top-0 object-cover ${videoPlayerClassName}`} controls
                        poster={videoPosterSrc}>
                        <source src={videoSrc} type="video/webm" />
                    </video>
                </div>
                <div className="h-full mt-4 md:mt-8">
                    {children}
                </div>
            </div>
        </>
    );
}

export default ExplainerVideoCard;