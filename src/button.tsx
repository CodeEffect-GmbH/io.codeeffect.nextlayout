import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Title from "./title";

export interface ButtonProps {
    icon?: ReactNode;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
    icon,
    children
}) => {
    return (
        <div className="flex cursor-pointer p-4 rounded-md transition-transform	hover:drop-shadow-md hover:scale-105">
            <Title level={5} compact>{children}</Title>
            {icon && <div>{icon}</div>}
        </div>
    );
}

export default Button;