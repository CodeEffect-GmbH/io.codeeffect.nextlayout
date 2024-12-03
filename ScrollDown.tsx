import { FunctionComponent } from "react";
import { ClassNameProps } from "./components.model";

export interface ScrollDownProps extends ClassNameProps {
    href: string;
    title: string;
}

const ScrollDown: FunctionComponent<ScrollDownProps> = ({
    href,
    title,
    className
}) => {
    return (
        <a className={className} href={href} title={title}>
            <svg className="w-10 h-10 md:w-12 md:h-12 transition-transform hover:drop-shadow-md hover:scale-105" viewBox="0 0 24 24">
                <title>{title}</title>
                <path fill="currentColor" d="M7 9H2C2 6.04 4.17 3.57 7 3.09V9M20 7H18V13H15L19 17L23 13H20V7M9 3.09V9H14C14 6.04 11.83 3.57 9 3.09M2 15C2 18.3 4.7 21 8 21S14 18.3 14 15V11H2V15Z" />
            </svg>
        </a>
    );
}

export default ScrollDown;