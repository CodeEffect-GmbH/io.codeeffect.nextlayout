import { FunctionComponent, PropsWithChildren } from "react"
import Title from "../typography/title";
import { ClassNameProps } from "../components.model";

export interface FeatureStepperStep extends ClassNameProps {
    isActive?: boolean;
    activeClassName?: string;
    onClick?: () => void;
}

const FeatureStepperStep: FunctionComponent<PropsWithChildren<FeatureStepperStep>> = ({
    activeClassName,
    isActive = false,
    className,
    children,
    onClick = null
}) => {
    const select = () => {
        if (onClick) {
            onClick();
        }
    };

    const classNameToUse = isActive && activeClassName ? activeClassName : className;

    return (
        <div className={`grow p-4 md:p-8 cursor-pointer ${classNameToUse ? classNameToUse : 'bg-gray-100'}`} onClick={select}>
            <div className="flex justify-between items-center">
                <Title level={5} compact>{children}</Title>
            </div>
        </div>
    );
}

export default FeatureStepperStep