import { FunctionComponent, PropsWithChildren } from "react";
import { ClassNameProps } from "./components.model";

const BulletList: FunctionComponent<PropsWithChildren<ClassNameProps>> = ({
    className,
    children
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
}

export default BulletList;