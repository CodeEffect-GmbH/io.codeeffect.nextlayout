import { FunctionComponent, PropsWithChildren } from "react";
import Text from "./text";

const CopyrightNotice: FunctionComponent<PropsWithChildren> = ({
    children
}) => {
    return (
        <div>
            <Text level={2} compact>&copy; {new Date().getFullYear()} {children}</Text>
        </div>
    );
}

export default CopyrightNotice;