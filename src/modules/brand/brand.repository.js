import { db } from '../../config/db.js';

export const createBrandRepo = async name => {
  try {
    return await db.user.create({
      data: {
        name: name,
      },
    });
  } catch (error) {}
};
