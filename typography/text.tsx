import { FunctionComponent } from "react";
import { TextProps } from "./typography.model";

const Text: FunctionComponent<React.PropsWithChildren<TextProps>> = ({
    level = 1,
    compact = false,
    className,
    children
}) => {
    return (
        <div className={`inline-block ${compact ? 'mb-0' : 'mb-4 md:mb-8 last:mb-0 last:md:mb-0'}`}>
            {level === 1 &&
                <div className={`block line-styled-heading text-lg ${className}`}>
                    {children}
                </div>}
            {level === 2 &&
                <div className={`block line-styled-heading text-base ${className}`}>
                    {children}
                </div>}
        </div>
    );
}

export default Text;