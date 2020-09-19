// types/mdx.d.ts
declare module '*.mdx' {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;

  export type TMeta = {
    title: string;
    categories: string[];
    lastUpdated?: TDate;
    firstPosted: TDate;
    authors: TAuthor[];
  };

  export type TDate = {
    year: number | string;
    month: number | string;
    day: number | string;
  };

  export type TAuthor = {
    firstName: string;
    lastName: string;
  };
}
