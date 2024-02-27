import { FunctionComponent } from "react";
import { ClassNameProps } from "./components.model";

export interface ParagraphProps extends ClassNameProps {
    compact?: boolean;
}

const Paragraph: FunctionComponent<React.PropsWithChildren<ParagraphProps>> = ({
    compact = false,
    className,
    children
}) => {
    return (
        <div className={`block line-styled-heading text-1xl md:text-1xl lg:text-2xl xl:text-2xl ${compact ? 'mb-0' : 'mb-8 md:mb-12'} ${className}`}>
            {children}
        </div>
    );
}

export default Paragraph;