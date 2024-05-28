import { FunctionComponent, useState } from "react";
import { NewsItemInfo } from "./news.model";
import Text from "../typography/text";
import Title from "../typography/title";
import Link from 'next/link';
import NewsItemTag from "./news-item-tag";
import LinkEx from "../link-ex";
import { ClassNameProps } from "../components.model";

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
        <div className={className}>
            <Link href={info.relativePath} title={info.title}>
                <div className="relative bg-gray-100 w-full h-60 mb-4 rounded-lg overflow-hidden cursor-pointer" onMouseEnter={showHover} onMouseLeave={hideHover}>
                    <img src={info.imageSrc} alt={info.title} className={`w-full h-full object-cover transition-transform ${hover ? 'scale-105' : ''}`} />
                </div>
            </Link>
            <div>
                <div className="mb-4 flex justify-between items-center">
                    <div className="mr-8">
                        <Text className="mb-2 text-ce-text-secondary" level={2} compact>{formattedDate}</Text>
                        <Link className="hover:text-ce-complementary" href={info.relativePath} title={info.title}><Title level={5} compact>{info.title}</Title></Link>
                    </div>
                    <div className="relative shrink-0 h-14 w-14 rounded-full overflow-hidden">
                        <img src={info.authorImageSrc} alt={info.authorName} className="object-cover" />
                    </div>
                </div>
                <Text compact className="mb-4">{info.abstract}</Text>
                <div className="mb-4 flex gap-4">
                    {info.tags.map((tag, index) => <NewsItemTag key={index}>{tag}</NewsItemTag>)}
                </div>
                <LinkEx href={info.relativePath} title={info.title}>Weiterlesen <svg className="inline w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><title>arrow-right</title><path d="M4,12H16.25L11,6.75L11.66,6L18.16,12.5L11.66,19L11,18.25L16.25,13H4V12Z" /></svg></LinkEx>
            </div>
        </div>
    );
}

export default NewsItem;