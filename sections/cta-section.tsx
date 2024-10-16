import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./Section";
import MaxWidthContainer from "./max-width-container";
import Text from "../typography/text";
import SectionHeader from "./section-header";
import { SectionProps } from "../components.model";

export interface CTASectionProps extends SectionProps {
    description?: string;
    className?: string;
}

const CTASection: FunctionComponent<PropsWithChildren<CTASectionProps>> = ({
    title,
    subtitle,
    overTitleIcon,
    forceLast = false,
    description,
    className,
    children
}) => {
    return (
        <Section forceLast={forceLast} className={`pb-24 md:pb-48 ${className ? className : ''}`}>
            <MaxWidthContainer>
                <div className='flex flex-col items-center'>
                    <SectionHeader title={title} subtitle={subtitle} align='center' overTitleIcon={overTitleIcon} />
                    {description &&
                        <div className="text-center">
                            <Text compact>{description}</Text>
                        </div>}
                    {children && <div className="mt-8 md:mt-12">{children}</div>}
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default CTASection;