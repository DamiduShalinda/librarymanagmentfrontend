import { z } from "zod";

export const rejectedResonSchema = z.object({
    id : z.number(),
    rejectedReason : z.string().optional()
})

export type TRejectedReason = z.infer<typeof rejectedResonSchema>;
    