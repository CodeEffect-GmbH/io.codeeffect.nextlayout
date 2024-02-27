'use client'

import { FunctionComponent, PropsWithChildren } from "react";
import MaxWidthContainer from "./max-width-container";
import CopyrightNotice from "./copyright-notice";
import { ClassNameProps } from "./components.model";

export interface FooterProps extends ClassNameProps {
    copyrightNotice?: string;
}

const Footer: FunctionComponent<PropsWithChildren<FooterProps>> = ({
    copyrightNotice,
    className,
    children
}) => {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`p-4 md:p-8 flex justify-center ${className}`}>
            <MaxWidthContainer>
                <div>
                    <div>{children}</div>
                    <div className="flex justify-between items-center">
                        {copyrightNotice && <CopyrightNotice>{copyrightNotice}</CopyrightNotice>}

                        <button className="hover:scale-105 hover:drop-shadow-md transition-transform" onClick={backToTop}>
                            <div className="relative w-10 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><title>arrow-up-bold</title><path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" /></svg>
                            </div>
                        </button>
                    </div>
                </div>
            </MaxWidthContainer>
        </div>
    );
}

export default Footer;