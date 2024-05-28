import { FunctionComponent } from "react";
import { TextProps } from "./typography.model";

export interface HeadingTitleProps extends TextProps {
    uppercase?: boolean;
}

const Title: FunctionComponent<React.PropsWithChildren<HeadingTitleProps>> = ({
    level = 1,
    uppercase = false,
    compact = false,
    className,
    children
}) => {
    return (
        <div className={`${uppercase ? 'uppercase' : 'normal-case'} ${compact ? 'mb-0' : 'mb-8 md:mb-12'} ${className}`}>
            {level === 1 && <h1 className="line-styled-heading text-4xl md:text-5xl lg:text-6xl font-bold">{children}</h1>}
            {level === 2 && <h2 className="line-styled-heading text-3xl md:text-4xl lg:text-5xl font-bold">{children}</h2>}
            {level === 3 && <h3 className="line-styled-heading text-2xl md:text-3xl lg:text-4xl font-bold">{children}</h3>}
            {level === 4 && <h4 className="line-styled-heading text-2xl md:text-2xl lg:text-3xl font-bold">{children}</h4>}
            {level === 5 && <h5 className="line-styled-heading text-1xl md:text-2xl font-bold">{children}</h5>}
            {level === 6 && <h6 className="line-styled-heading text-1xl md:text-2xl">{children}</h6>}
        </div>
    );
}

export default Title;