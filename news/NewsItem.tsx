import { FunctionComponent, useState } from "react";
import { NewsItemInfo } from "./news.model";
import Text from "../typography/text";
import Title from "../typography/title";
import NewsItemTag from "./news-item-tag";
import LinkEx from "../link-ex";
import { ClassNameProps } from "../components.model";
import Image from "next/image";

export interface NewsItemProps extends ClassNameProps {
    info: NewsItemInfo;
}

const NewsItem: FunctionComponent<NewsItemProps> = ({
    info,
    className
}) => {
    const [hover, setHover] = useState<boolean>(false);

    const showHover = () => {
        setHover(true);
    };

    const hideHover = () => {
        setHover(false);
    };

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const dateTimeFormatter = new Intl.DateTimeFormat(undefined, options);
    const formattedDate = dateTimeFormatter.format(Date.parse(info.date));

    return (
        <div className={className} onMouseEnter={showHover} onMouseLeave={hideHover}>
            <LinkEx className="" href={info.relativePath} title={info.title}>
                <div className="relative bg-gray-100 w-full h-60 mb-4 rounded-lg overflow-hidden cursor-pointer">
                    <Image src={info.imageSrc} alt={info.title} className={`w-full h-full object-cover transition-transform ${hover ? 'scale-105' : ''}`} fill />
                </div>

                <div>
                    <div className="mb-4 flex justify-between items-center">
                        <div className="mr-8">
                            <Text className="mb-2 text-ce-text-secondary" level={2} compact>{formattedDate}</Text>
                            <Title className={hover ? 'text-ce-complementary' : ''} level={5} compact>{info.title}</Title>
                        </div>
                        <div className="relative shrink-0 h-14 w-14 rounded-full overflow-hidden">
                            <Image src={info.authorImageSrc} alt={info.authorName} fill />
                        </div>
                    </div>
                    <Text compact className="mb-4">{info.abstract}</Text>
                    <div className="mb-4 flex gap-4">
                        {info.tags.map((tag, index) => <NewsItemTag key={index}>{tag}</NewsItemTag>)}
                    </div>
                </div>
            </LinkEx>
        </div>
    );
}

export default NewsItem;