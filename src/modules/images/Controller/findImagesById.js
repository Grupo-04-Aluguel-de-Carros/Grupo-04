import { HttpStatusCode } from "axios";
import { findServiceById } from "../Service/findServiceImageById.js";

export const findImagesById = async (req, res) => {
    try {
        const {id} = req.body;

        const resultFromImageById = await findServiceById(id);      
        
        return res.status(HttpStatusCode.Ok).json({
            data: resultFromImageById
        });
    } catch (error) {
        console.log("Error ==> ", error);
        return res.status(error.status).json({
            message: error.message
        })
    }
}