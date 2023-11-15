import { db } from "../../../config/db.js";
import { HttpStatusCode } from "axios";

export const findImageByRepo = async (id) => {
    try {
        const imageById = await db.images.findUnique({
            where: {
                id,
            }
        })
        return imageById;
    } catch (error) {
        console.log('Error ==> ',error);
        throw{
            message: error.message,
            status: HttpStatusCode.InternalServerError || error.status
        }
    }
}
