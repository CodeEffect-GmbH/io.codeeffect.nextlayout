import { FunctionComponent, PropsWithChildren } from "react";
import { MinimalSectionProps } from "../components.model";

const Section: FunctionComponent<PropsWithChildren<MinimalSectionProps>> = ({
    className,
    forceLast = false,
    children,
    anchorId,
    compact
}) => {
    return (
        <div className={`relative flex justify-center px-4 md:px-8 ${compact ? `pt-16 lg:pt-24 ${forceLast ? 'pb-16 lg:pb-24' : 'last:pb-16 lg:last:pb-24'}` : `pt-24 lg:pt-28 ${forceLast ? 'pb-24 lg:pb-28' : 'last:pb-24 lg:last:pb-28'}`} ${className ? className : ''}`}>
            {anchorId && <a className="absolute top-24" id={anchorId} />}
            {children}
        </div>
    );
}

export default Section;