import { FunctionComponent, PropsWithChildren } from "react";
import Title from "../typography/title";
import Text from "../typography/text";
import { FooterGroupProps } from "./footer.model";

const FooterBasicGroup: FunctionComponent<PropsWithChildren<FooterGroupProps>> = ({
    title,
    children
}) => {
    return (
        <div>
            {title &&
                <div className="mb-8">
                    <Title className="mb-2" level={5} compact>{title}</Title>
                </div>}
            <Text level={2}>{children}</Text>
        </div>
    );
}

export default FooterBasicGroup;