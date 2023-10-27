export const validateBrandBeforeCreate = ({ name }) => {
  try {
    const brand = db.brand.create({
      data: {
        name: name,
      },
    });
    return brand;
  } catch (error) {
    throwError('Error creating table car');
  }
};
