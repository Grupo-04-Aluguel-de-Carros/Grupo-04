export const validateBrandBeforeCreate = async ({ name }) => {
  try {
    const brand = await db.brand.create({
      data: {
        name: name,
      },
    });
    return brand;
  } catch (error) {
    throwError('Error creating table car');
  }
};
