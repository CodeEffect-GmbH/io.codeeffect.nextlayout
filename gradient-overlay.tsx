import { FunctionComponent } from "react";

export interface GradientOverlayProps {
    fromColor?: string;
    toColor?: string;
    opacity?: number;
}

const GradientOverlay: FunctionComponent<GradientOverlayProps> = ({
    fromColor = '#fff',
    toColor = '#000',
    opacity = 80
}) => {
    return (
        <div className={`absolute left-0 top-0 right-0 bottom-0`}
            style={{
                opacity: `${opacity}%`,
                backgroundImage: `radial-gradient(circle at center, ${fromColor}, ${toColor})`
            }}></div>
    );
}

export default GradientOverlay;