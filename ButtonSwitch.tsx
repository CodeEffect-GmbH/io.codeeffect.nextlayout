'use client';

import Text from './typography/text';

export interface ButtonSwitchProps {
  isLeft: boolean;
  leftLabel: string;
  rightLabel: string;
  onSwitch?: (isLeft: boolean) => void;
}

const ButtonSwitch = ({
  isLeft,
  leftLabel,
  rightLabel,
  onSwitch,
}: ButtonSwitchProps) => {
  const onClickLeft = () => {
    onSwitch?.(true);
  };

  const onClickRight = () => {
    onSwitch?.(false);
  };

  const activeStyle = 'bg-brand-accent text-white';
  const inactiveStyle =
    'border-2 border-solid border-brand-border hover:bg-brand-border';

  return (
    <div className="font-bold cursor-pointer flex justify-center">
      <div
        className={isLeft ? activeStyle : inactiveStyle}
        onClick={onClickLeft}>
        <div className="p-4">
          <Text compact>{leftLabel}</Text>
        </div>
      </div>
      <div
        className={!isLeft ? activeStyle : inactiveStyle}
        onClick={onClickRight}>
        <div className="p-4">
          <Text compact>{rightLabel}</Text>
        </div>
      </div>
    </div>
  );
};

export default ButtonSwitch;
