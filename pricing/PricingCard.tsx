import { FunctionComponent, ReactElement } from "react";
import Title from "../typography/title";
import LinkButton from "../link-button";
import Text from "../typography/text";

export interface PricingCardProps {
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
        <div>
            <div className={`p-4 md:p-8 bg-gray-100 flex justify-center items-center h-20 ${headerClassName}`}>
                <div className="text-center">
                    <Title uppercase compact level={5}>{tierName}</Title>
                    <Text compact>{tierPrice}</Text>
                </div>
            </div>
            <div className={bodyClassName ? bodyClassName : 'border-2 border-solid border-gray-100'}>
                <div className="grid grid-cols-1 divide-y-2 divide-gray-100">
                    {features.map((feature, index) =>
                        <div key={index} className="px-4 md:px-8 py-4 flex items-center gap-4">
                            {featureIcon && featureIcon}
                            <Text compact>{feature}</Text>
                        </div>
                    )}
                </div>

                <div className="flex justify-center items-center px-4 md:px-8 py-4">
                    <LinkButton className={buttonClassName} href={buttonHref} title={buttonText}>{buttonText}</LinkButton>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;