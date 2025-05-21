import { FunctionComponent, ReactElement } from 'react';
import Title from '../typography/title';
import Text from '../typography/text';
import BaseCard from './BaseCard';
import { ClassNameProps } from '../components.model';

export interface PricingCardProps extends ClassNameProps {
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  tierName: string;
  tierPrice: string;
  tierPriceNote?: string;
  action: ReactElement;
  featuresTitle?: string;
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
  featuresTitle,
  features,
}) => {
  return (
    <BaseCard
      className={className}
      title={
        <div className={`p-4 md:p-8 flex flex-col gap-2 ${headerClassName}`}>
          <Title
            level={5}
            compact>
            {tierName}
          </Title>
          <div className="flex gap-4">
            <Title
              uppercase
              level={3}>
              {tierPrice}
            </Title>
            {tierPriceNote && (
              <div className="max-w-32">
                <Text level={2}>{tierPriceNote}</Text>
              </div>
            )}
          </div>
        </div>
      }
      body={
        <div className={bodyClassName}>
          {featuresTitle && (
            <div className="px-4 md:px-8 font-bold pt-4">
              <Text level={2}>{featuresTitle}</Text>
            </div>
          )}
          <div className="grid grid-cols-1 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="px-4 md:px-8 py-2 flex items-center gap-4">
                <div>{feature.icon}</div>
                <Text
                  compact
                  className={feature.textClassName}>
                  {feature.text}
                </Text>
              </div>
            ))}
          </div>
        </div>
      }
      footer={
        <div
          className={`flex justify-center items-center p-4 md:p-8 ${footerClassName}`}>
          {action}
        </div>
      }
    />
  );
};

export default PricingCard;
