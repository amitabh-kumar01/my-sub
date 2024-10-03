"use client"

import { Credit } from "@/components/pages";
import SimpleLayout from "@/layout/customLayout";
import { usePathname } from "next/navigation"

export default function Page() {
  const path = usePathname().slice(-1);

  return <SimpleLayout><Credit path={path}/></SimpleLayout>

}

