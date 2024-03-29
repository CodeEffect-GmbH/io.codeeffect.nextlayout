'use client'

import { FunctionComponent } from "react";
import Button from "./button";
import DrawerIcon from "./drawer-icon";
import { ClassNameProps } from "./components.model";

export interface DrawerToggleProps extends ClassNameProps {
    onToggle?: () => void;
}

const DrawerToggle: FunctionComponent<DrawerToggleProps> = ({
    onToggle = () => { },
    className
}) => {
    return (
        <Button className={className} icon={<DrawerIcon />} onClick={onToggle} />
    );
}

export default DrawerToggle;