import { FunctionComponent, PropsWithChildren } from "react"
import { ClassNameProps } from "../components.model";

const FeatureStepperStepContent: FunctionComponent<PropsWithChildren<ClassNameProps>> = ({
    children,
    className
}) => {
    return (
        <div className={`relative h-full ${className}`}>
            {children}
        </div>
    );
}

export default FeatureStepperStepContent