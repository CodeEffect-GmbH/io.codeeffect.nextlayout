import { FunctionComponent, PropsWithChildren } from "react";
import { ClassNameProps } from "./components.model";

const Section: FunctionComponent<PropsWithChildren<ClassNameProps>> = ({
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