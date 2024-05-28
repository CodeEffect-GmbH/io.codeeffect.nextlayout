import { FunctionComponent, PropsWithChildren } from "react";

const FAQ: FunctionComponent<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="flex flex-col gap-4">
            {children}
        </div>
    );
}

export default FAQ;