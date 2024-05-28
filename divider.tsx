import { FunctionComponent } from "react";
import { ClassNameProps } from "./components.model";

const Divider: FunctionComponent<ClassNameProps> = ({
    className
}) => {
    return (
        <div className={`border-t w-full ${className}`}></div>
    );
}

export default Divider;