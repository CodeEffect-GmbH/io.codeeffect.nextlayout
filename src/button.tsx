'use client'

import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Title from "./title";
import { ClassNameProps } from "./components.model";

export interface ButtonProps extends ClassNameProps {
    icon?: ReactNode;
    onClick?: () => void;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
    icon,
    className,
    onClick = () => { },
    children
}) => {
    return (
        <div className={`flex items-center cursor-pointer p-4 rounded-lg transition-transform hover:drop-shadow-md hover:scale-105 ${className}`}
            onClick={onClick}>
            {children && <div className="mr-4">
                <Title level={5} compact>{children}</Title>
            </div>}
            {icon && <div>{icon}</div>}
        </div>
    );
}

export default Button;