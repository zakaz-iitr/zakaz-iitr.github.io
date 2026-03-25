import { getVendorById, getMenuItemsByVendor, getMenuCategories } from "@/lib/data"
import { VendorPageClient } from "./vendor-page-client"

interface VendorPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return [{ id: "cbri" }]
}

export default async function VendorPage({ params }: VendorPageProps) {
  const { id } = await params
  const vendor = getVendorById(id, "cbri-inside")

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Vendor not found</p>
      </div>
    )
  }

  const menuItems = getMenuItemsByVendor(id, "cbri-inside")
  const categories = getMenuCategories(id, "cbri-inside")

  return <VendorPageClient vendor={vendor} menuItems={menuItems} categories={categories} />
}
