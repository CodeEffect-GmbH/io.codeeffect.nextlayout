import { FunctionComponent, PropsWithChildren } from "react";

const BulletList: FunctionComponent<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className='flex flex-col gap-8'>
            {children}
        </div>
    );
}

export default BulletList;