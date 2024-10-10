import { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import MaxWidthContainer from "./max-width-container";
import Section from "./section";
import { MinimalSectionProps } from "../components.model";

export interface TwoColumnSection extends MinimalSectionProps {
    left: ReactElement;
    right: ReactElement;
    reversed?: boolean;
}

const TwoColumnSection: FunctionComponent<PropsWithChildren<TwoColumnSection>> = ({
    left,
    right,
    forceLast = false,
    reversed = false,
}) => {
    return (
        <Section forceLast={forceLast}>
            <MaxWidthContainer>
                <div className={`flex items-center ${reversed ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}>
                    {left}
                    {right}
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default TwoColumnSection;