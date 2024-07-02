import { FunctionComponent, PropsWithChildren } from "react";
import Title from "../typography/title";
import { FooterGroupProps } from "./footer.model";

const FooterLinkGroup: FunctionComponent<PropsWithChildren<FooterGroupProps>> = ({
    title,
    dividerClassName,
    orientation = 'vertical',
    children
}) => {
    return (
        <div>
            {title &&
                <div className="mb-8">
                    <Title className="mb-2 text-nowrap" level={5} compact>{title}</Title>
                    <div className={`border-b-4 ${dividerClassName}`}></div>
                </div>}
            <div className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} gap-2`}>
                {children}
            </div>
        </div>
    );
}

export default FooterLinkGroup;