import { FunctionComponent, PropsWithChildren } from "react";
import Section from "./section";
import MaxWidthContainer from "./max-width-container";
import Title from "./title";
import Paragraph from "./paragraph";

export interface CTASectionProps {
    title: string;
    overTitle: string;
    description: string;
}

const CTASection: FunctionComponent<PropsWithChildren<CTASectionProps>> = ({
    title,
    overTitle,
    description,
    children
}) => {
    return (
        <Section className="pb-24 md:pb-48 bg-slate-300">
            <MaxWidthContainer>
                <div className='max-w-screen-lg flex flex-col items-center'>
                    <div className="mb-2 md:mb-4">
                        <Title level={5} uppercase compact>{overTitle}</Title>
                    </div>
                    <div className="text-center">
                        <Title level={2}>{title}</Title>
                    </div>
                    <div className="text-center">
                        <Paragraph>{description}</Paragraph>
                    </div>
                    <div>{children}</div>
                </div>
            </MaxWidthContainer>
        </Section>
    );
}

export default CTASection;