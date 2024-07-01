import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Title from "./typography/title";
import { ClassNameProps } from "./components.model";
import LinkEx from "./link-ex";

export interface LinkButtonProps extends ClassNameProps {
    icon?: ReactNode;
    href: string;
    title: string;
}

const LinkButton: FunctionComponent<PropsWithChildren<LinkButtonProps>> = ({
    icon,
    href,
    title,
    className,
    children
}) => {
    return (
        <LinkEx href={href} title={title} className={`flex items-center cursor-pointer p-4 transition-transform hover:drop-shadow-md hover:scale-105 ${className}`}>
            <div className="flex items-center">
                {children && <div className={`${icon ? 'mr-4' : ''}`}>
                    <Title level={5} compact>{children}</Title>
                </div>}
                {icon && <div>{icon}</div>}
            </div>
        </LinkEx>
    );
}

export default LinkButton;