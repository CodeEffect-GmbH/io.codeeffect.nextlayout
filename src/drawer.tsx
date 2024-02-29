import { FunctionComponent, PropsWithChildren } from "react";

const Drawer: FunctionComponent<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="h-full h-full bg-white">
            Drawer
        </div>
    );
}

export default Drawer;