import { FunctionComponent, PropsWithChildren } from "react";
import Title from "../typography/title";
import Text from "../typography/text";
import { FooterGroupProps } from "./footer.model";
import React from "react";

const FooterBasicGroup: FunctionComponent<PropsWithChildren<FooterGroupProps>> = ({
    title,
    children
}) => {
    return (
        <div>
            {title && <div>{React.isValidElement(title) ? title : <Title className="text-nowrap" level={5}>{title}</Title>}</div>}
            <Text level={2}>{children}</Text>
        </div>
    );
}

export default FooterBasicGroup;