import { FunctionComponent, PropsWithChildren } from "react";
import Text from "../typography/text";
import { ClassNameProps } from "../components.model";

const NewsItemTag: FunctionComponent<PropsWithChildren<ClassNameProps>> = ({
    children,
    className
}) => {
    return (
        <div className={`bg-gray-100 px-4 py-2 rounded-lg max-w-40 flex justify-center items-center ${className}`}>
            <Text level={2}>{children}</Text>
        </div>
    );
}

export default NewsItemTag;