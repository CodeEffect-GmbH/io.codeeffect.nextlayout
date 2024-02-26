import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./section";
import MaxWidthContainer from "./max-width-container";
import Title from "./title";
import Paragraph from "./paragraph";
import SectionHeader from "./section-header";

export interface CTASectionProps {
    title: string;
    overTitle: string;
    description: string;
    className?: string;
}

const CTASection: FunctionComponent<PropsWithChildren<CTASectionProps>> = ({
    title,
    overTitle,
    description,
    className,
    children
}) => {
    return (
        <Section className={`pb-24 md:pb-48 ${className ? className : ''}`}>
            <MaxWidthContainer>
                <div className='flex flex-col items-center'>
                    <SectionHeader title={title} overTitle={overTitle} align='center' />
                    <div className="text-center">
                        <Paragraph compact>{description}</Paragraph>
                    </div>
                    {children && <div className="mt-8 md:mt-12">{children}</div>}
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default CTASection;