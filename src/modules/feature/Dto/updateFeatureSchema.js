import { object, string } from "zod";

export const updateFeatureSchema = object({
    params:object({
        id:string().uuid()
    })
})