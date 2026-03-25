import { redirect } from "next/navigation"

interface OrderPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return []
}

export const dynamicParams = false

export default async function OrderTrackingPage({ params }: OrderPageProps) {
  // Order tracking page disabled - redirect to home
  redirect("/")
}
