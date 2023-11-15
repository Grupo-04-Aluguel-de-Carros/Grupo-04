import { findImageByRepo } from "../Repository/findImageByIdRepo.js"

export const findServiceById = async (id) => {
    try {
        const resultFromRepo = await findImageByRepo(id)

        return resultFromRepo;
    } catch (error) {
        throw{
            message: error.message,
            status: error.status
        }
    }
}