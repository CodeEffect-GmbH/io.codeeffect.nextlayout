'use client'

import { ChangeEvent, FunctionComponent, ReactElement, useState } from "react";
import { LangProps } from "./lang.model";
import Text from "../typography/text";
import { useRouter, usePathname } from 'next/navigation';

export interface Language {
    flag: ReactElement;
    code: string;
    name: string;
}

export interface LanguagePickerProps extends LangProps {
    languages: Language[];
}

const LanguagePicker: FunctionComponent<LanguagePickerProps> = ({
    languages,
    params: { lang }
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(true);

    const handleLanguageChange = (language: Language): void => {
        setSelectedLanguage(language);
        const languagePattern = new RegExp(`^/(${languages.map(l => l.code).join('|')})`);
        const pathnameWithoutLocale = pathname.replace(languagePattern, '');
        router.replace(`/${selectedLanguage.code}${pathnameWithoutLocale}`);
    };

    return (
        <div className="relative inline-block cursor-pointer">
            <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
                <div>{selectedLanguage.flag}</div>
            </div>

            {isOpen &&
                <ul className="absolute flex flex-col bg-white p-2 rounded-lg mt-4 list-none gap-2 right-0">
                    {languages.map((language) => (
                        <li className="cursor-pointer flex items-center" key={language.code} onClick={() => handleLanguageChange(language)}>
                            {language.flag}
                            <span>{language.name}</span>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default LanguagePicker;