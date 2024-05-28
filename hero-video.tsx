import { FunctionComponent } from "react";
import { SourceProps } from "./components.model";

const HeroVideo: FunctionComponent<SourceProps> = (props) => {
    return (
        <div className="z-0">
            <video className="absolute h-full w-full left-0 top-0 object-cover"
                autoPlay muted loop controls={false}>
                <source src={props.src} type="video/mp4" />
            </video>
        </div>
    );
}

export default HeroVideo;