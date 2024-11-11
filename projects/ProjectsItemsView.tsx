import { FunctionComponent } from "react";
import { ProjectsItemInfo } from "./projects.model";
import ProjectItem from "./ProjectItem";

export interface ProjectsItemsViewProps {
    tagsClassName?: string;
    items: ProjectsItemInfo[];
}

const ProjectsItemsView: FunctionComponent<ProjectsItemsViewProps> = ({
    tagsClassName,
    items
}) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8`}>
            {items.map((item, itemIndex) => <ProjectItem key={itemIndex} info={item} tagsClassName={tagsClassName} />)}
        </div>
    );
}

export default ProjectsItemsView;