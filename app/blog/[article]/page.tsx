import React from 'react';
import { notFound } from 'next/navigation';

import { articles } from '@/config/blog/articles';

const getArticleMarkdown = async (article: string) => {
  if (article in articles) return articles[article];
  return;
};

export default async function MdxArticlePage({
  params,
}: {
  params: { article: string };
}) {
  const Markdown = await getArticleMarkdown(params.article);

  if (!Markdown) return notFound();

  return <Markdown />;
}
