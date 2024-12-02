import { TabBar } from '@/app/components'
import { cookies } from 'next/headers'
import React from 'react'

export const metadata = {
    title: 'Cookies page'
}

const CookiesPage = async () => {
    const cookieStore = await cookies()
    const tab = cookieStore.get('selectedTab')?.value ?? 1
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <div className='flex flex-col gap-2'>
                <span className='text-3xl'>Tabs</span>
                <TabBar currentTab={Number(tab)}/>
            </div>
        </div>
    )
}

export default CookiesPage