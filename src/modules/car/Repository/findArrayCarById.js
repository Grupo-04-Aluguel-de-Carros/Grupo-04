import { HttpStatusCode } from "axios";
import { db } from "../../../config/db.js";

export const findArrayCarById = async () => {
    try {
        const idChecked = await db.feature.findMany({
            select:{
                cars:{
                    select:{
                        carId:true
                    }
                }
            }
        })
        return idChecked;
    } catch (error) {
        console.log("Error ==>", error);
        throw{
            message: error.message,
            status: HttpStatusCode.InternalServerError || error.status
        }
    }

}