import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const NavBarSearch = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 pb-2">
    <Input type="text" placeholder="Search" />
    <Button type="submit" size={'icon'} variant={'secondary'}><Search size={16} strokeWidth={1} absoluteStrokeWidth /></Button>
  </div>
  )
}

export default NavBarSearch