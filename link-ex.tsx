import { FunctionComponent, PropsWithChildren } from 'react';
import { ClassNameProps } from './components.model';
import Link from 'next/link';
import Text from './typography/text';

export interface LinkExProps extends ClassNameProps {
  external?: boolean;
  href: string;
  title: string;
  level?: number;
}

const LinkEx: FunctionComponent<PropsWithChildren<LinkExProps>> = ({
  external = false,
  href,
  title,
  level = 1,
  className,
  children,
}) => {
  return (
    <Text
      compact
      className={className}
      level={level}>
      {external && (
        <a
          href={href}
          title={title}>
          <span>
            {children}{' '}
            <svg
              className="inline w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24">
              <title>open-in-new</title>
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
          </span>
        </a>
      )}
      {!external && (
        <Link
          href={href}
          title={title}>
          {children}
        </Link>
      )}
    </Text>
  );
};

export default LinkEx;
