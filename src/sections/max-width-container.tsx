import { FunctionComponent, PropsWithChildren } from "react";

const MaxWidthContainer: FunctionComponent<PropsWithChildren> = (props) => {
    return (
        <div className="max-w-screen-2xl w-full">
            {props.children}
        </div>
    );
}

export default MaxWidthContainer;