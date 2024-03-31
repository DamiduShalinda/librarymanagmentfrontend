import { z } from "zod"

export const AuthorSchema = z.object({
    id : z.number().int().nonnegative(),
    authorName: z.string().min(3 , {
        message: "Author name must be at least 3 characters long"
    }).max(255 , {
        message: "Author name must be at most 255 characters long"
    }),
    })

export type TAuthor = z.infer<typeof AuthorSchema>