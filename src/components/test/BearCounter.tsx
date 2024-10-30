'use client'

import { useTestStore } from "@/store/test/test.store"

export const BearCounter = () => {
  const bears = useTestStore((state) => state.bears)
  
  return <h1>{bears} around here...</h1>
  
}
