import { FunctionComponent } from "react";

export interface GradientOverlayProps {
    fromColor?: string;
    viaColor?: string;
    toColor?: string;
    opacity?: number;
}

const GradientOverlay: FunctionComponent<GradientOverlayProps> = ({
    fromColor = '#fff',
    viaColor = null,
    toColor = '#000',
    opacity = 90
}) => {
    return (
        <div className={`absolute left-0 top-0 right-0 bottom-0 opacity-${opacity} bg-gradient-to-r from-[${fromColor}]${viaColor ? ` via-[${viaColor}]` : ''} to-[${toColor}]`}></div>
    );
}

export default GradientOverlay;