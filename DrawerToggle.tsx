'use client'

import { FunctionComponent } from "react";
import Button from "./button";
import { ClassNameProps } from "./components.model";

export interface DrawerToggleProps extends ClassNameProps {
    title: string;
    onToggle?: () => void;
}

const DrawerToggle: FunctionComponent<DrawerToggleProps> = ({
    onToggle = () => { },
    title,
    className
}) => {
    return (
        <Button className={className} icon={
            <div className="relative w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <title>{title}</title>
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
            </div>
        } onClick={onToggle} />
    );
}

export default DrawerToggle;