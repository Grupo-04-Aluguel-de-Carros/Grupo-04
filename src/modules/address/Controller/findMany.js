import { findManyAddress } from '../Service/index.js';

export const findMany = async (req, res) => {
  try {
    const { query, order } = req.query;

    const { currentPage, listPerPage, offset } = req.pagination;
    const result = await findManyAddress({ listPerPage, offset, query, order });

    return res.json({ data: result, meta: { page: currentPage } });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
