export const createBrand = async (req, res) => {
  const { name, car } = req.body;
  const result = await createBrand({ name, car });

  return res.status(201).json({
    data: result,
    message: 'Brand sucefull created !',
  });
};
export const excludeBrand = async (req, res) => {};
export const readBrand = async (req, res) => {};
export const updateBrand = async (req, res) => {};
