"use client"

import { useState } from "react"
import { type MenuItem } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { useStore } from "@/context/StoreContext"
import { VendorHeader } from "@/components/vendor/vendor-header"
import { CategoryTabs } from "@/components/vendor/category-tabs"
import { MenuGrid } from "@/components/vendor/menu-grid"
import { ItemDrawer } from "@/components/item-drawer"
import { FloatingCartButton } from "@/components/floating-cart-button"
import { BottomNav } from "@/components/layout/bottom-nav"
import type { Vendor } from "@/lib/data"

interface VendorPageClientProps {
  vendor: Vendor
  menuItems: MenuItem[]
  categories: any[]
}

export function VendorPageClient({ vendor, menuItems, categories }: VendorPageClientProps) {
  const { addItem } = useCart()
  const [activeCategory, setActiveCategory] = useState(categories[0] || "")
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item)
    setIsDrawerOpen(true)
  }

  const handleQuickAdd = (item: MenuItem) => {
    addItem(item, vendor, 1, [])
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setTimeout(() => setSelectedItem(null), 300)
  }

  return (
    <div className="min-h-screen bg-background pb-36">
      <VendorHeader vendor={vendor} />

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <MenuGrid
        items={menuItems}
        activeCategory={activeCategory}
        onSelectItem={handleSelectItem}
        onQuickAdd={handleQuickAdd}
      />

      <ItemDrawer
        item={selectedItem}
        vendor={vendor}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />

      <FloatingCartButton />
      <BottomNav />
    </div>
  )
}
