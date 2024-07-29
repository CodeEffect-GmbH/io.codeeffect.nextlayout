'use client'

import { ChangeEvent, FunctionComponent, ReactElement } from "react";
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

    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        const selectedLanguage = event.target.value;
        const languagePattern = new RegExp(`^/(${languages.map(l => l.code).join('|')})`);
        const pathnameWithoutLocale = pathname.replace(languagePattern, '');
        router.replace(`/${selectedLanguage}${pathnameWithoutLocale}`);
    };

    return (
        <div>
            <select
                value={lang}
                className="p-2 border-0"
                onChange={handleChange}>
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        <div className="flex">
                            <div>{language.flag}</div>
                            <Text>{language.name}</Text>
                        </div>
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguagePicker;