import { FunctionComponent, PropsWithChildren } from "react";
import Title from "./title";
import { FooterGroupProps } from "./components.model";

const FooterBasicGroup: FunctionComponent<PropsWithChildren<FooterGroupProps>> = ({
    title,
    children
}) => {
    return (
        <div>
            {title && <div className="mb-2"><Title level={5} compact>{title}</Title></div>}
            <div>
                {children}
            </div>
        </div>
    );
}

export default FooterBasicGroup;