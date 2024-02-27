import { FunctionComponent, ReactNode } from "react";
import Title from "./title";

export interface SectionHeaderProps {
    title: string;
    overTitle: string;
    overTitleClassName?: string;
    align?: string;
    overTitleIcon?: ReactNode;
}

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
    title,
    overTitle,
    overTitleClassName,
    align = 'left',
    overTitleIcon
}) => {
    const alignClass = align === 'left' ? 'text-left' : (align === 'center' ? 'text-center' : 'text-right');
    const alignClassFlex = align === 'left' ? 'justify-left' : (align === 'center' ? 'justify-center' : 'justify-right');

    return (
        <div>
            <div className={`flex mb-2 md:mb-4 ${alignClassFlex} ${overTitleClassName}`}>
                {overTitleIcon && <div className="mr-2">{overTitleIcon}</div>}
                <Title level={5} uppercase compact>{overTitle}</Title>
            </div>
            <div className={alignClass}>
                <Title level={2}>{title}</Title>
            </div>
        </div>
    );
}

export default SectionHeader;