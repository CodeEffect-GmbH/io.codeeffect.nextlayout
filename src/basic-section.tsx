import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./section";
import MaxWidthContainer from "./max-width-container";
import SectionHeader from "./section-header";

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
                    <SectionHeader title={title} overTitle={overTitle} align='center' />
                    <div>{children}</div>
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default BasicSection;