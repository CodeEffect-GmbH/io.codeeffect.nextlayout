import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./section";
import MaxWidthContainer from "./max-width-container";
import SectionHeader from "./section-header";
import { SectionProps } from "../components.model";

const BasicSection: FunctionComponent<PropsWithChildren<SectionProps>> = ({
    title,
    overTitle,
    overTitleClassName,
    overTitleIcon,
    children
}) => {
    return (
        <Section>
            <MaxWidthContainer>
                <div className='flex flex-col'>
                    <SectionHeader title={title} overTitle={overTitle} align='center' overTitleIcon={overTitleIcon} overTitleClassName={overTitleClassName} />
                    <div>{children}</div>
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default BasicSection;