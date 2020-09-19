import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';
import PostTemplate from '../../templates/PostTemplate';

export const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { filename } = props;
  const MDXContent = dynamic(() => import(`../../../articles/${filename}`));
  const MDXMetadata = dynamic(() => import(`../../../articles/${filename}`).then((mod) => mod.metadata));

  return <PostTemplate Content={MDXContent} meta={MDXMetadata} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const filenames = fs.readdirSync(articlesDirectory);
  const paths = filenames.map((filename) => ({
    params: { pid: filename.replace('.mdx', '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const preFilename = params ? params.pid : 'not-pages';
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const filename = path.join(articlesDirectory, `${preFilename}.mdx`);

  return {
    props: {
      filename,
    },
  };
};

export default Post;
