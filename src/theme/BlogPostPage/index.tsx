import React, {type ReactNode} from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import type BlogPostPageType from '@theme/BlogPostPage';
import type {WrapperProps} from '@docusaurus/types';
import Giscus from '@giscus/react';

type Props = WrapperProps<typeof BlogPostPageType>;

export default function BlogPostPageWrapper(props: Props): ReactNode {
  return (
    <>
      <BlogPostPage {...props} />
      <Giscus
        id="comments"
        repo="your-github-username/my-blog"
        repoId="R_kgDxxx"
        category="Announcements"
        categoryId="DIC_kwDxxx"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
    </>
  );
}
