import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'

const NavBarSearch = () => {
  return (
    <div className="flex w-1/3 items-center space-x-2 pb-8">
          <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Search By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Search By</SelectLabel>
          <SelectItem value="book">Book</SelectItem>
          <SelectItem value="author">Author</SelectItem>
          <SelectItem value="isbn">ISBN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Input type="text" placeholder="Search" />
    <Button type="submit" size={'icon'} variant={'secondary'}><Search size={16} strokeWidth={1} absoluteStrokeWidth /></Button>
  </div>
  )
}

export default NavBarSearch