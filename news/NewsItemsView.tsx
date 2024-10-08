import { FunctionComponent } from "react";
import { NewsItemInfo } from "./news.model";
import NewsItem from "./NewsItem";

export interface NewsItemsViewProps {
    locale: string;
    itemsPerRow?: number;
    tagsClassName?: string;
    items: NewsItemInfo[];
}

const NewsItemsView: FunctionComponent<NewsItemsViewProps> = ({
    locale,
    itemsPerRow = 3,
    tagsClassName,
    items
}) => {
    if (itemsPerRow > items.length) {
        itemsPerRow = items.length;
    }

    return (
        <div className={`grid grid-cols-${itemsPerRow} md:grid-cols-${itemsPerRow} gap-4 md:gap-8`}>
            {items.map((item, itemIndex) => <NewsItem locale={locale} key={itemIndex} info={item} tagsClassName={tagsClassName} />)}
        </div>
    );
}

export default NewsItemsView;