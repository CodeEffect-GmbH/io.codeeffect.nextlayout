import { FunctionComponent, PropsWithChildren } from "react";

export interface SectionProps {
    className?: string;
}

const Section: FunctionComponent<PropsWithChildren<SectionProps>> = ({
    className,
    children
}) => {
    return (
        <div className={`px-4 md:px-8 pt-24 md:pt-48 last:pb-24 md:last:pb-48 flex justify-center ${className ? className : ''}`}>
            {children}
        </div>
    );
}

export default Section;