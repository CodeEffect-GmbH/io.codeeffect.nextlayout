import { FunctionComponent, PropsWithChildren } from "react";
import { ClassNameProps } from "../components.model";

export interface VideoPlayerProps extends ClassNameProps {
    src: string;
    posterSrc: string;
}

const VideoPlayer: FunctionComponent<PropsWithChildren<VideoPlayerProps>> = ({
    src,
    posterSrc,
    className
}) => {
    return (
        <div>
            <div className={`relative hidden lg:block bg-black h-[40rem] ${className}`}>
                <video className="absolute h-full w-full left-0 top-0 object-cover" controls
                    poster={posterSrc}>
                    <source src={src} type="video/webm" />
                </video>
            </div>
            <div className={`flex flex-col lg:hidden ${className}`}>
                <div className="relative h-[14rem]">
                    <video className="absolute h-full w-full left-0 top-0 object-cover" controls
                        poster={posterSrc}>
                        <source src={src} type="video/webm" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;