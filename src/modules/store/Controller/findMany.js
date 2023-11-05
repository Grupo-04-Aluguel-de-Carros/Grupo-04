import { findManyStore } from '../Service/index.js';

export const findMany = async (req, res) => {
  try {
    const { query, order } = req.query;

    const { currentPage, listPerPage, offset } = req.pagination;
    const result = await findManyStore({ listPerPage, offset, query, order });

    return res.json({ data: result, meta: { page: currentPage } });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
