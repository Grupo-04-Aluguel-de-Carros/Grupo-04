import { HttpStatusCode } from 'axios';
import { findManyAddressRepo } from '../Repository/index.js';

export const findManyAddress = async ({
  offset,
  listPerPage,
  query,
  order,
}) => {
  try {
    return await findManyAddressRepo({ offset, listPerPage, query, order });
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
