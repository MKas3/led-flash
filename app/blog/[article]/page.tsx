import type { Metadata, ResolvingMetadata } from 'next';

import React from 'react';

import { notFound } from 'next/navigation';

import { articles, articlesMetadata } from '@/config/blog/articles';
import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  return Object.entries(articles).map((article) => ({
    article: article[0]
  }));
}

const getArticleMarkdown = async (article: string) => {
  if (article in articles) return articles[article];
};

export async function generateMetadata(
  params: { params: { article: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const articleMetadata = articlesMetadata.find(
    (article) => article.urlNaming === params.params.article
  );

  const previousImages = (await parent).openGraph?.images || [];

  return {
    openGraph: {
      images: [
        {
          alt: 'Led Flash',
          height: 443,
          url: articleMetadata?.previewSrc ?? siteConfig.ogImage,
          width: 847
        },
        ...previousImages
      ]
    },
    title: articleMetadata?.naming,
    twitter: {
      images: [
        {
          alt: 'Led Flash',
          height: 443,
          url: articleMetadata?.previewSrc ?? siteConfig.ogImage,
          width: 847
        }
      ]
    }
  };
};

export default async function MdxArticlePage({
  params
}: {
  params: { article: string };
}) {
  const Markdown = await getArticleMarkdown(params.article);

  if (!Markdown) return notFound();

  return <Markdown />;
}
