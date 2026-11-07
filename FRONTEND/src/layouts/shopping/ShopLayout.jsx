import React from 'react'
import { Outlet } from 'react-router'
import ShopHeader from '../../components/shopping/ShopHeader'

const ShopLayout = () => {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
      {/* Common Header */}
      <ShopHeader />

      <main className='flex flex-col w-full'>
        <Outlet />
      </main>
    </div>
  )
}

export default ShopLayout