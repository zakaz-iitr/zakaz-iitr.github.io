import { notFound } from "next/navigation"
import { getVendorById, getMenuItemsByVendor, getMenuCategories, isValidStoreSlug } from "@/lib/data"
import { VendorPageClient } from "@/app/vendor/[id]/vendor-page-client"

interface StoreVendorPageProps {
  params: Promise<{ store: string; id: string }>
}

export async function generateStaticParams() {
  return [
    { store: "cbri-inside", id: "cbri" },
    { store: "cbri-outside", id: "cbri" }
  ]
}

export default async function StoreVendorPage({ params }: StoreVendorPageProps) {
  const { store, id } = await params
  if (!isValidStoreSlug(store)) notFound()

  const vendor = getVendorById(id, store)
  if (!vendor) notFound()

  const menuItems = getMenuItemsByVendor(id, store)
  const categories = getMenuCategories(id, store)

  return <VendorPageClient vendor={vendor} menuItems={menuItems} categories={categories} />
}
