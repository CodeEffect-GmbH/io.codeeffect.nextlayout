import { FunctionComponent, PropsWithChildren } from "react";
import Text from "../typography/text";
import { ClassNameProps } from "../components.model";

const NewsItemTag: FunctionComponent<PropsWithChildren<ClassNameProps>> = ({
    children,
    className
}) => {
    return (
        <div className={`px-4 py-2 flex justify-center items-center ${className ? className : 'bg-gray-100 rounded-lg'}`}>
            <Text level={2}>{children}</Text>
        </div>
    );
}

export default NewsItemTag;