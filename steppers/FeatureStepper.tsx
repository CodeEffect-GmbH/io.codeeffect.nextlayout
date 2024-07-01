'use client'

import { FunctionComponent, ReactElement, useState } from "react"
import FeatureStepperStep from "./FeatureStepperStep";
import { ClassNameProps } from "../components.model";

export interface FeatureStepperProps extends ClassNameProps {
    steps: string[];
    stepsContainerClassName?: string;
    stepItemsClassName?: string;
    activeStepItemClassName?: string;
    contents: ReactElement[];
    contentsContainerClassName?: string;
}

const FeatureStepper: FunctionComponent<FeatureStepperProps> = ({
    className,
    steps,
    stepsContainerClassName,
    stepItemsClassName,
    activeStepItemClassName = 'bg-gray-200',
    contents,
    contentsContainerClassName
}) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
        <div className={`flex flex-col md:flex-row ${className}`}>
            <div className={contentsContainerClassName ? contentsContainerClassName : 'basis-2/3'}>
                {contents[selectedIndex]}
            </div>

            <div className={stepsContainerClassName ? stepsContainerClassName : 'basis-1/3 flex flex-col '}>
                {steps.map((step, index) => <FeatureStepperStep
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    isActive={index === selectedIndex}
                    className={stepItemsClassName}
                    activeClassName={activeStepItemClassName}>{step}</FeatureStepperStep>)}
            </div>
        </div>
    );
}

export default FeatureStepper;