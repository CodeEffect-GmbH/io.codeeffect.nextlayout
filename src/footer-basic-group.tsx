import { FunctionComponent, PropsWithChildren } from "react";
import Title from "./title";
import { FooterGroupProps } from "./components.model";
import Text from "./text";

const FooterBasicGroup: FunctionComponent<PropsWithChildren<FooterGroupProps>> = ({
    title,
    children
}) => {
    return (
        <div>
            {title && <div className="mb-2"><Title level={5} compact>{title}</Title></div>}
            <Text level={2}>{children}</Text>
        </div>
    );
}

export default FooterBasicGroup;