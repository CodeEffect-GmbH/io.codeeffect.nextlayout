import { FunctionComponent, PropsWithChildren } from "react";

const JobPostingList: FunctionComponent<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className='flex flex-col gap-8'>
            {children}
        </div>
    );
}

export default JobPostingList;