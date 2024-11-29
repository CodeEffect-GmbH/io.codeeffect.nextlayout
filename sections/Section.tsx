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
        <div className={`relative flex justify-center px-4 md:px-8 ${compact ? `pt-8 lg:pt-12 ${forceLast ? 'pb-8 lg:pb-12' : 'last:pb-8 lg:last:pb-12'}` : `pt-24 lg:pt-28 ${forceLast ? 'pb-24 lg:pb-28' : 'last:pb-24 lg:last:pb-28'}`} ${className ? className : ''}`}>
            {anchorId && <a className="absolute top-24" id={anchorId} />}
            {children}
        </div>
    );
}

export default Section;