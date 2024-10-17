import { FunctionComponent, PropsWithChildren } from "react";
import { MinimalSectionProps } from "../components.model";

const Section: FunctionComponent<PropsWithChildren<MinimalSectionProps>> = ({
    className,
    forceLast = false,
    children,
    anchorId
}) => {
    return (
        <div className={`relative px-4 md:px-8 pt-24 lg:pt-44 ${forceLast ? 'pb-24 lg:pb-44' : 'last:pb-24 lg:last:pb-44'} flex justify-center ${className ? className : ''}`}>
            {anchorId && <a className="absolute top-24" id={anchorId} />}
            {children}
        </div>
    );
}

export default Section;