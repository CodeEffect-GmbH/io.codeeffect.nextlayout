import { FunctionComponent, PropsWithChildren } from "react";

const Hero: FunctionComponent<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="h-screen relative overflow-hidden">
            {children}
        </div>
    );
}

export default Hero;