export interface LangProps {
  params: {
    lang: string;
  };
}

export type LangPropsParams = Promise<{ lang: string }>;
