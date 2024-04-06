import { getAuthors, getAuthorsById } from '@/api/author'
import { TAuthor } from '@/schema/authorsSchema.ts'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const AuthorItem = (id : number) => {
    const { isLoading , error , data , isError } = useQuery<TAuthor>({
        queryKey : ["authors", id],
        queryFn : () => getAuthorsById(id)
    })

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error: {error.message}</div>
  return (
    <div>
        {data?.authorName}
    </div>
  )
}

export default AuthorItem