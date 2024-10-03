import { FunctionComponent, PropsWithChildren } from "react";
import Title from "../typography/title";
import { FooterGroupProps } from "./footer.model";
import React from "react";

const FooterLinkGroup: FunctionComponent<PropsWithChildren<FooterGroupProps>> = ({
    title,
    orientation = 'vertical',
    children
}) => {
    return (
        <div>
            {title && <div>{React.isValidElement(title) ? title : <Title className="text-nowrap" level={5}>{title}</Title>}</div>}
            <div className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} gap-2`}>
                {children}
            </div>
        </div>
    );
}

export default FooterLinkGroup;