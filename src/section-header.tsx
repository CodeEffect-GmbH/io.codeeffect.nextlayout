import { FunctionComponent } from "react";
import Title from "./title";

export interface SectionHeaderProps {
    title: string;
    overTitle: string;
    align?: string;
}

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
    title,
    overTitle,
    align = 'left'
}) => {
    const alignClass = align === 'left' ? 'text-left' : (align === 'center' ? 'text-center' : 'text-right');

    return (
        <div>
            <div className={`mb-2 md:mb-4 ${alignClass}`}>
                <Title level={5} uppercase compact>{overTitle}</Title>
            </div>
            <div className={alignClass}>
                <Title level={2}>{title}</Title>
            </div>
        </div>
    );
}

export default SectionHeader;