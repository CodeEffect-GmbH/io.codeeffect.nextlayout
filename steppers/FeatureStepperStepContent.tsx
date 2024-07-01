import { FunctionComponent, PropsWithChildren } from "react"
import { ClassNameProps } from "../components.model";
import Image from "next/image";

export interface FeatureStepperStepImageProps extends ClassNameProps {
    imageSrc: string;
    imageAlt: string;
}

const FeatureStepperStepContent: FunctionComponent<PropsWithChildren<FeatureStepperStepImageProps>> = ({
    imageSrc,
    imageAlt,
    children,
    className,
}) => {
    return (
        <div className={`relative h-full ${className}`}>
            <Image src={imageSrc} alt={imageAlt} fill objectFit="cover" />

            <div className="absolute left-0 top-0 right-0 bottom-0">
                {children}
            </div>
        </div>
    );
}

export default FeatureStepperStepContent