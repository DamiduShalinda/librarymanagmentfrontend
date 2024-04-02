import { z } from "zod";

export const BookAddSchema = z.object({
    id: z.number().int().nonnegative(),
    bookName: z.string().min(3, {
        message: "Title must be at least 3 characters long"
    }).max(255, {
        message: "Title must be at most 255 characters long"
    }),
    author: z.string().min(0 , {
        message: "Author must be at least 0 characters long"
    }).max(255, {
        message: "Author must be at most 255 characters long"
    }),
    isbn: z.string().min(10, {
        message: "ISBN must be at least 10 characters long"
    }).max(13, {
        message: "ISBN must be at most 13 characters long"
    }),
});

export type TBookAdd = z.infer<typeof BookAddSchema>;