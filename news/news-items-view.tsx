import { FunctionComponent } from "react";
import { NewsItemInfo } from "./news.model";
import NewsItem from "./news-item";

export interface NewsItemsViewProps {
    itemsPerRow?: number;
    items: NewsItemInfo[];
}

const NewsItemsView: FunctionComponent<NewsItemsViewProps> = ({
    itemsPerRow = 3,
    items
}) => {
    const buildRows = () => {
        const rows = [];

        for (let i = 0; i < items.length; i += itemsPerRow) {
            const row = items.slice(i, i + itemsPerRow);
            rows.push(row);
        }

        return rows;
    };

    return (
        <div>
            {buildRows().map((row, rowIndex) =>
                <div key={rowIndex} className={`grid md:grid-cols-${itemsPerRow} gap-8 mt-8`}>
                    {row.map((item, itemIndex) => <NewsItem key={itemIndex} className={`basis-1/${itemsPerRow}`} info={item} />)}
                </div>
            )}
        </div>
    );
}

export default NewsItemsView;