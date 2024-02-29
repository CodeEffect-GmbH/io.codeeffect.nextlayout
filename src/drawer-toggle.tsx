'use client'

import { FunctionComponent } from "react";
import Button from "./button";
import DrawerIcon from "./drawer-icon";

export interface DrawerToggleProps {
    onToggle?: () => void;
}

const DrawerToggle: FunctionComponent<DrawerToggleProps> = ({
    onToggle = () => { }
}) => {
    return (
        <Button icon={<DrawerIcon />} onClick={onToggle} />
    );
}

export default DrawerToggle;