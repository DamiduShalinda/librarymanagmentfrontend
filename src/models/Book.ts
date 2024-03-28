type TBook = {
    Id : number,
    BookName : string,
    ISBN : string,
    AuthorId: number,
    Author : TAuthor,
    AddedAt : Date
}