import { redirect } from "next/navigation"

export async function generateStaticParams() {
  return []
}

export const dynamicParams = false

export default async function OrderSuccessPage() {
  redirect("/cbri-outside")
}
