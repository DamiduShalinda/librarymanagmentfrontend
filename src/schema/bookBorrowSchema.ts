import { date, z } from "zod";

export const BookBorrowSchema = z.object({
    bookName : z.string().min(3, {
        message: "Title must be at least 3 characters long"
    }).max(255, {
        message: "Title must be at most 255 characters long"
    }),
    userName: z.string().min(3, {
        message: "User must be at least 3 characters long"
    }).max(255, {
        message: "User must be at most 255 characters long"
    }),
    dateBorrowed: z.date().refine((date) => {
        return date.getTime() > Date.now();
    }, {
        message: "Date borrowed must be in the future"
    }),
});

export type TBookBorrow = z.infer<typeof BookBorrowSchema>;