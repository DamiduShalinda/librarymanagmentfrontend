import ItemSearch from '@/components/common/ItemSearch'
import Navbar from '@/components/common/Navbar'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex flex-row gap-3 h-screen">
      <Navbar />
      <div className="pt-5 w-full">
        <ItemSearch />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
