import { FunctionComponent, ReactElement } from "react";
import Title from "../typography/title";
import LinkButton from "../link-button";
import Text from "../typography/text";
import BaseCard from "./BaseCard";
import { ClassNameProps } from "../components.model";

export interface PricingCardProps extends ClassNameProps {
    headerClassName?: string;
    bodyClassName?: string;
    tierName: string;
    tierPrice: string;
    buttonText: string;
    buttonHref: string;
    buttonClassName?: string;
    features: string[];
    featureIcon?: ReactElement;
}

const PricingCard: FunctionComponent<PricingCardProps> = ({
    className,
    headerClassName,
    bodyClassName,
    tierName,
    tierPrice,
    buttonText,
    buttonHref,
    buttonClassName,
    features,
    featureIcon
}) => {
    return (
        <BaseCard className={className} title={
            <div className={`p-4 md:p-8 flex justify-center items-center h-20 ${headerClassName}`}>
                <div className="text-center">
                    <Text compact>{tierName}</Text>
                    <Title uppercase compact level={5}>{tierPrice}</Title>
                </div>
            </div>
        }
            body={
                <div className={bodyClassName}>
                    <div className="grid grid-cols-1">
                        {features.map((feature, index) =>
                            <div key={index} className="px-4 md:px-8 py-4 flex items-center gap-4">
                                {featureIcon && featureIcon}
                                <Text compact>{feature}</Text>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center items-center p-4 md:p-8">
                        <LinkButton className={buttonClassName} href={buttonHref} title={buttonText}>{buttonText}</LinkButton>
                    </div>
                </div>
            } />
    );
}

export default PricingCard;