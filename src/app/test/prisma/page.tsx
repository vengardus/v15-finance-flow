import prisma from '@/lib/prisma'
import React from 'react'

export default async function TestPage() {
    const data = await prisma.account.findMany()

    console.log(data)

    return (
        <div className='bg-red-500 text-3xl'>TestPage</div>
    )
}
