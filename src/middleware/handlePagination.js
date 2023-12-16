// import { throwError } from '../utils/index.js';

import { HttpStatusCode } from 'axios';

export const handlePagination = (req, res, next) => {
  try {
    const { page, limit } = req.query;

    if (page && !Number.isInteger(+page)) {
      throw { message: 'Página inválida', status: HttpStatusCode.BadRequest };
    }

    const currentPage = Number(page) || 1;
    const listPerPage = Number(limit) || 5;
    const offset = (currentPage - 1) * listPerPage;
    req.pagination = { currentPage, listPerPage, offset };
    next();
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
