import { FunctionComponent } from "react";
import { TextProps } from "./components.model";

const Text: FunctionComponent<React.PropsWithChildren<TextProps>> = ({
    level = 1,
    compact = false,
    className,
    children
}) => {
    return (
        <div className={`inline-block ${compact ? 'mb-0' : 'mb-8 md:mb-12 last:mb-0 last:md:mb-0'}`}>
            {level === 1 &&
                <div className={`block line-styled-heading text-1xl lg:text-2xl ${className}`}>
                    {children}
                </div>}
            {level === 2 &&
                <div className={`block line-styled-heading text-sm md:text-base ${className}`}>
                    {children}
                </div>}
        </div>
    );
}

export default Text;