'use client'

import { FunctionComponent, ReactElement, useState } from "react";
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
    const [selectedLanguage, setSelectedLanguage] = useState(languages.find(l => l.code === lang)!);
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (language: Language): void => {
        const languagePattern = new RegExp(`^/(${languages.map(l => l.code).join('|')})`);
        const pathnameWithoutLocale = pathname.replace(languagePattern, '');
        router.replace(`/${language.code}${pathnameWithoutLocale}`);
    };

    return (
        <div className="relative inline-block">
            <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div>{selectedLanguage.flag}</div>
            </div>

            {isOpen &&
                <ul className="absolute flex flex-col bg-white p-2 rounded-lg mt-4 list-none right-0">
                    {languages.map((language) => (
                        <li className="cursor-pointer flex py-2 items-center" key={language.code} onClick={() => handleLanguageChange(language)}>
                            <div>{language.flag}</div>
                            <Text>{language.name}</Text>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default LanguagePicker;