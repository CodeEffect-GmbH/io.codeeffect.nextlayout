import { FunctionComponent } from "react";
import { NewsItemInfo } from "./news.model";
import NewsItem from "./NewsItem";

export interface NewsItemsViewProps {
    locale: string;
    tagsClassName?: string;
    items: NewsItemInfo[];
}

const NewsItemsView: FunctionComponent<NewsItemsViewProps> = ({
    locale,
    tagsClassName,
    items
}) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8`}>
            {items.map((item, itemIndex) => <NewsItem locale={locale} key={itemIndex} info={item} tagsClassName={tagsClassName} />)}
        </div>
    );
}

export default NewsItemsView;