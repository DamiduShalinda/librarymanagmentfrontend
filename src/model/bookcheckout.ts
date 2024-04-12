export type TBookCheckout = {
    bookList: number[]
    checkOutDate: Date
}

export type TSimpleBook = {
    id : number
    bookname : string
    author : string
}


export const bookSampleData : TSimpleBook[] = [
    {
        id: 1,
        bookname: "Book 1",
        author: "Author 1"
    },
    {
        id: 2,
        bookname: "Book 2",
        author: "Author 2"
    },
    {
        id: 3,
        bookname: "Book 3",
        author: "Author 3"
    }
]
