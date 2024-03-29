import { FunctionComponent, PropsWithChildren } from "react";
import Title from "../title";
import Text from "../text";
import { FooterGroupProps } from "./footer.model";

const FooterBasicGroup: FunctionComponent<PropsWithChildren<FooterGroupProps>> = ({
    title,
    dividerClassName,
    children
}) => {
    return (
        <div>
            {title &&
                <div className="mb-8">
                    <Title className="mb-2" level={5} compact>{title}</Title>
                    <div className={`border-b-4 ${dividerClassName}`}></div>
                </div>}
            <Text level={2}>{children}</Text>
        </div>
    );
}

export default FooterBasicGroup;