import { FunctionComponent } from "react";

export interface ParagraphProps {
    compact?: boolean;
}

const Paragraph: FunctionComponent<React.PropsWithChildren<ParagraphProps>> = ({
    compact = false,
    children
}) => {
    return (
        <div className={`block line-styled-heading text-1xl md:text-1xl lg:text-2xl xl:text-2xl ${compact ? 'mb-0' : 'mb-8 md:mb-12'}`}>
            {children}
        </div>
    );
}

export default Paragraph;