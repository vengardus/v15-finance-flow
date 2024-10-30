'use client'

import { useTestStore } from "@/store/test/test.store"
import { BearCounter } from "./BearCounter"


export const Controls = () => {
  const increasePopulation = useTestStore((state) => state.increasePopulation)

  return (
    <div className="flex gap-10 flex-col">
      <button className="bg-indigo-600 text-white p-4" onClick={increasePopulation}>one up</button>
      <BearCounter />
    </div>
  )
}
