import { notFound } from "next/navigation"
import SearchPage from "@/app/search/page"
import { isValidStoreSlug } from "@/lib/data"

interface StoreSearchPageProps {
  params: Promise<{ store: string }>
}

export async function generateStaticParams() {
  return [
    { store: "cbri-inside" },
    { store: "cbri-outside" }
  ]
}

export default async function StoreSearchPage({ params }: StoreSearchPageProps) {
  const { store } = await params
  if (!isValidStoreSlug(store)) notFound()
  return <SearchPage />
}
