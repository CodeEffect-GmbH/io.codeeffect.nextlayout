import { FunctionComponent, PropsWithChildren } from "react";
import { ClassNameProps } from "./components.model";

const Hero: FunctionComponent<PropsWithChildren<ClassNameProps>> = ({
    children,
    className
}) => {
    return (
        <div className={`h-screen relative overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

export default Hero;