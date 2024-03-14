import { FunctionComponent, PropsWithChildren } from "react";
import { ClassNameProps } from "../components.model";

const NavBarSubmenu: FunctionComponent<PropsWithChildren<ClassNameProps>> = ({
    className,
    children
}) => {
    return (
        <div className={`absolute rounded-lg top-0 p-8 flex flex-col justify-center gap-4 ${className}`}>
            {children}
        </div>
    );
}

export default NavBarSubmenu;