import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./Section";
import MaxWidthContainer from "./max-width-container";
import SectionHeader from "./section-header";
import { SectionProps } from "../components.model";

const BasicSection: FunctionComponent<PropsWithChildren<SectionProps>> = ({
    title,
    subtitle,
    className,
    overTitleIcon,
    align = 'center',
    forceLast = false,
    children,
    anchorId
}) => {
    return (
        <Section className={className} anchorId={anchorId} forceLast={forceLast}>
            <MaxWidthContainer>
                <div className='flex flex-col'>
                    <SectionHeader align={align} title={title} subtitle={subtitle} overTitleIcon={overTitleIcon} />
                    <div>{children}</div>
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default BasicSection;