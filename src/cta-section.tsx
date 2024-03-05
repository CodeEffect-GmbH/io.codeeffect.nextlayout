import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./section";
import MaxWidthContainer from "./max-width-container";
import Text from "./text";
import SectionHeader from "./section-header";
import { SectionProps } from "./components.model";

export interface CTASectionProps extends SectionProps {
    description?: string;
    className?: string;
}

const CTASection: FunctionComponent<PropsWithChildren<CTASectionProps>> = ({
    title,
    overTitle,
    overTitleClassName,
    overTitleIcon,
    description,
    className,
    children
}) => {
    return (
        <Section className={`pb-24 md:pb-48 ${className ? className : ''}`}>
            <MaxWidthContainer>
                <div className='flex flex-col items-center'>
                    <SectionHeader title={title} overTitle={overTitle} align='center' overTitleIcon={overTitleIcon} overTitleClassName={overTitleClassName} />
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