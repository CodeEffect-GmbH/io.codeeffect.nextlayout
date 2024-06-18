import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./section";
import MaxWidthContainer from "./max-width-container";
import SectionHeader from "./section-header";
import { SectionProps } from "../components.model";

const BasicSection: FunctionComponent<PropsWithChildren<SectionProps>> = ({
    title,
    subtitle,
    className,
    overTitleIcon,
    forceLast = false,
    children
}) => {
    return (
        <Section className={className} forceLast={forceLast}>
            <MaxWidthContainer>
                <div className='flex flex-col'>
                    <SectionHeader title={title} subtitle={subtitle} align='center' overTitleIcon={overTitleIcon} />
                    <div>{children}</div>
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default BasicSection;