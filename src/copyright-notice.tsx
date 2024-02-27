import { FunctionComponent, PropsWithChildren } from "react";

const CopyrightNotice: FunctionComponent<PropsWithChildren> = ({
    children
}) => {
    return (
        <div>
            <span>&copy; {new Date().getFullYear()} {children}</span>
        </div>
    );
}

export default CopyrightNotice;