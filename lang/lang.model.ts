export interface LangProps {
  params: {
    lang: string;
  };
}

export type LangPropsParams = Promise<LangProps>;
