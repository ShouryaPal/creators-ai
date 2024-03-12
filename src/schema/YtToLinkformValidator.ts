import { z } from "zod";

export const formValidator = z.object({
    link : z.string().url({message:'Invalid URL'}),
    tone : z.string()
})