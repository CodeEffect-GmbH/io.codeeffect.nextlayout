'use client'

import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { ClassNameProps } from "./components.model";
import Text from "./typography/text";

export interface ButtonProps extends ClassNameProps {
    icon?: ReactNode;
    level?: number;
    onClick?: () => void;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
    icon,
    level = 1,
    className,
    onClick = () => { },
    children
}) => {
    return (
        <div className={`flex items-center cursor-pointer p-4 rounded-lg transition-transform hover:drop-shadow-md hover:scale-105 ${className}`}
            onClick={onClick}>
            {children && <div className={`font-bold ${icon ? 'mr-4' : ''}`}>
                <Text level={level} compact>{children}</Text>
            </div>}
            {icon && <div>{icon}</div>}
        </div>
    );
}

export default Button;