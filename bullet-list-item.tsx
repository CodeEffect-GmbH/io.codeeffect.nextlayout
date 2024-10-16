import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Title from "./typography/title";

export interface BulletListItemProps {
    title?: string;
    bullet?: ReactNode;
}

const BulletListItem: FunctionComponent<PropsWithChildren<BulletListItemProps>> = ({
    title,
    bullet,
    children
}) => {
    return (
        <div className='flex'>
            {bullet &&
                <div className="mr-2 md:mr-4">
                    {bullet}
                </div>}
            <div className="md:text-justify">
                {title && <Title level={5} compact>{title}</Title>}
                {children}
            </div>
        </div>
    );
}

export default BulletListItem;