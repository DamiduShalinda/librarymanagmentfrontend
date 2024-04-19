import { z } from "zod";

export const CompletedCheckoutSchema = z.object({
    id: z.number(),
    remarks: z.string().optional(),
});

export type TCompletedCheckout = z.infer<typeof CompletedCheckoutSchema>;