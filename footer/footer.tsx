'use client';

import { FunctionComponent, PropsWithChildren } from 'react';
import MaxWidthContainer from '../sections/max-width-container';
import CopyrightNotice from '../copyright-notice';
import { ClassNameProps } from '../components.model';

export interface FooterProps extends ClassNameProps {
  copyrightNotice?: string;
  backToTopTitle: string;
  backToTopClassName?: string;
}

const Footer: FunctionComponent<PropsWithChildren<FooterProps>> = ({
  copyrightNotice,
  backToTopTitle,
  backToTopClassName,
  className,
  children,
}) => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`p-4 md:p-8 flex justify-center ${className}`}>
      <MaxWidthContainer>
        <div>
          {children && <div className="py-8 md:py-12">{children}</div>}
          <div className="flex justify-between items-center">
            {copyrightNotice && (
              <CopyrightNotice>{copyrightNotice}</CopyrightNotice>
            )}

            <button
              className={`hover:scale-105 hover:drop-shadow-md transition-transform ${backToTopClassName}`}
              onClick={backToTop}>
              <div className="relative w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <title>{backToTopTitle}</title>
                  <path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Footer;
