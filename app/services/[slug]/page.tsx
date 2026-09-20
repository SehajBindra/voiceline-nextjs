import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ServicePage } from "@/components/services/detail-page"
import {
  getService,
  isServiceSlug,
  serviceSlugs,
} from "@/lib/services/catalog"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!isServiceSlug(slug)) {
    return {}
  }
  return getService(slug).metadata
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  if (!isServiceSlug(slug)) {
    notFound()
  }

  const { metadata: _metadata, ...pageProps } = getService(slug)
  void _metadata

  return <ServicePage {...pageProps} />
}
