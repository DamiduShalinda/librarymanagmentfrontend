import { TSimpleBook } from '@/model/simplebook'
import { Trash } from 'lucide-react'
import React from 'react'

type BookCheckoutItemProps = {
    data : TSimpleBook,
    onClickDeleteButton : (name : string) => void
}


const BookCheckoutItem:React.FC<BookCheckoutItemProps> = ({data , onClickDeleteButton}) => {

  return (
        <div className="flex flex-row gap-4 items-center justify-between py-2 px-5 hover:bg-gray-100 rounded-md" id='bookDataContainer'>
            <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col gap-0" id='book'>
                <div className="text-lg font-medium">{data.bookName}</div>
                <div className="text-xs text-gray-500">{data.authorName}</div>
            </div>
            </div>
            <Trash size={20} absoluteStrokeWidth strokeWidth={1.5} onClick={() => onClickDeleteButton(data.bookName)} className='cursor-pointer hover:text-red-600'/>
        </div>
  )
}

export default BookCheckoutItem