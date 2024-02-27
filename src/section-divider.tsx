import { FunctionComponent } from "react";
import { ClassNameProps } from "./components.model";
import MaxWidthContainer from "./max-width-container";
import Divider from "./divider";

const SectionDivider: FunctionComponent<ClassNameProps> = ({
    className
}) => {
    return (
        <div className="px-4 md:px-8 flex justify-center">
            <MaxWidthContainer>
                <Divider className={className} />
            </MaxWidthContainer>
        </div>
    );
}

export default SectionDivider;