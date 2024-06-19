import { FunctionComponent, ReactElement } from "react";
import Title from "../typography/title";
import React from "react";
import { ClassNameProps } from "../components.model";

export interface SectionHeaderProps extends ClassNameProps {
    title: string | ReactElement;
    subtitle: string | ReactElement;
    align?: SectionHeaderAlignment;
    overTitleIcon?: ReactElement;
}

export type SectionHeaderAlignment = 'left' | 'center' | 'right';

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
    className,
    title,
    subtitle,
    align = 'left',
    overTitleIcon
}) => {
    const alignClass = align === 'left' ? 'text-left' : (align === 'center' ? 'text-center' : 'text-right');
    const alignClassFlex = align === 'left' ? 'justify-left' : (align === 'center' ? 'justify-center' : 'justify-right');

    return (
        <div className={className}>
            <div className={`flex mb-2 md:mb-4 ${alignClassFlex}`}>
                {overTitleIcon && <div className="mr-2">{overTitleIcon}</div>}
                {React.isValidElement(subtitle) ? subtitle : <Title className="text-pretty" level={5} uppercase compact>{subtitle}</Title>}
            </div>
            <div className={alignClass}>
                {React.isValidElement(title) ? title : <Title level={3}>{title}</Title>}
            </div>
        </div>
    );
}

export default SectionHeader;