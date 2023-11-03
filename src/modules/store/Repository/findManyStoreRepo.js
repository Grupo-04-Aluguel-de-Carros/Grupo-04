import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyStoreRepo = ({ offset, listPerPage, query, order }) => {
  try {
    return db.store.findMany({
      where: { name: { contains: query } },
      orderBy: {
        createdAt: order ? order : 'desc',
      },
      skip: offset,
      take: listPerPage,
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel buscar as lojas',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
