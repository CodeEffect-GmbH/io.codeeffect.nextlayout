import { FunctionComponent, ReactElement } from "react";
import Title from "../typography/title";
import Text from "../typography/text";
import BaseCard from "./BaseCard";
import { ClassNameProps } from "../components.model";

export interface PricingCardProps extends ClassNameProps {
    headerClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
    tierName: string;
    tierPrice: string;
    tierPriceNote?: string;
    action: ReactElement;
    features: TierFeature[];
}

export interface TierFeature {
    icon: ReactElement;
    text: string;
    textClassName?: string;
}

const PricingCard: FunctionComponent<PricingCardProps> = ({
    className,
    headerClassName,
    bodyClassName,
    footerClassName,
    tierName,
    tierPrice,
    tierPriceNote,
    action,
    features
}) => {
    return (
        <BaseCard className={className} title={
            <div className={`p-4 md:p-8 flex justify-center items-center ${headerClassName}`}>
                <div className="text-center">
                    <Title level={5}>{tierName}</Title>
                    <div>
                        <Title uppercase level={4}>{tierPrice}</Title>
                        {tierPriceNote && <Text level={2}>{tierPriceNote}</Text>}
                    </div>
                </div>
            </div>
        }
            body={
                <div className={bodyClassName}>
                    <div className="grid grid-cols-1">
                        {features.map((feature, index) =>
                            <div key={index} className="px-4 md:px-8 py-4 flex items-center gap-4">
                                <div>{feature.icon}</div>
                                <Text compact className={feature.textClassName}>{feature.text}</Text>
                            </div>
                        )}
                    </div>
                </div>
            }
            footer={
                <div className={`flex justify-center items-center p-4 md:p-8 ${footerClassName}`}>
                    {action}
                </div>
            } />
    );
}

export default PricingCard;