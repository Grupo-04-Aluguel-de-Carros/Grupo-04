import { db } from '../../../config/db.js'
import { HttpStatusCode } from 'axios';

export const createBrandRepo = async (name) => {
  try { 
    const brand = await db.brand.create({
      data: {
        name : name
      },
      select:{
        name : true
      }
    });
    return brand;
  } catch (error) {
    throw new Error("É necessário o preenchimento do campo nome", HttpStatusCode.BadRequest)
  }
};
