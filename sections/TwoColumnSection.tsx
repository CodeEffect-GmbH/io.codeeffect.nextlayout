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
                {reversed &&
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
                        {right}
                        {left}
                    </div>
                }
                {!reversed &&
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
                        {left}
                        {right}
                    </div>
                }
            </MaxWidthContainer>
        </Section>
    );
}

export default TwoColumnSection;