import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./section";
import MaxWidthContainer from "./max-width-container";
import Title from "./title";
import Paragraph from "./paragraph";

export interface BasicSectionProps {
    title: string;
    overTitle: string;
}

const BasicSection: FunctionComponent<PropsWithChildren<BasicSectionProps>> = ({
    title,
    overTitle,
    children
}) => {
    return (
        <Section>
            <MaxWidthContainer>
                <div className='flex flex-col'>
                    <div className="text-center mb-2 md:mb-4">
                        <Title level={5} uppercase compact>{overTitle}</Title>
                    </div>
                    <div className="text-center">
                        <Title level={2}>{title}</Title>
                    </div>
                    <div>{children}</div>
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default BasicSection;