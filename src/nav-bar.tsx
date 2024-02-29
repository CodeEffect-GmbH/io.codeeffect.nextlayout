import { FunctionComponent, PropsWithChildren } from "react";
import { ClassNameProps } from "./components.model";

const NavBar: FunctionComponent<PropsWithChildren<ClassNameProps>> = ({
    className,
    children
}) => {
    return (
        <div className={`h-full flex gap-8 ${className}`}>
            {children}
        </div>
    );
}

export default NavBar;