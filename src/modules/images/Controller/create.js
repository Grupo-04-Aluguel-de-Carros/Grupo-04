import { HttpStatusCode } from "axios";

export const create = (req, res) => {
try {
    console.log(req.body);

    return res.status(HttpStatusCode.Created).json({
        data: req.body
    })
} catch (error) {
    return res.status(error.status).json({message: error.message})
    }};
