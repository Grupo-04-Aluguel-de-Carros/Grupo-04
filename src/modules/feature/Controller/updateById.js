import { HttpStatusCode } from "axios";

export const updateById = (req, res) => {
    try {
        const {id} = req.params;
        return res.status(HttpStatusCode.Ok).json({
            data: id
        })
    } catch (error) {
        return res.status(error.status).json({error: error.message})
    }

}