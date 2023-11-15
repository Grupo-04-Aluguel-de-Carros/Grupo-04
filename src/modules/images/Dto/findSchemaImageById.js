import { object, string } from "zod";

export const findSchemaImageById = object({
    params:object({
        id:string().uuid().trim()
    })
})