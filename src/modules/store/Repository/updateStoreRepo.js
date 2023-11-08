import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateStoreRepo = async (id, updateBody) => {
  try {
    // let brandBody = {};
    // if (updateBody.brands) {
    //   brandBody = {
    //     brands: {
    //       create: updateBody.brands.map(brandData => ({
    //         brand: {
    //           connect: {
    //             id: brandData,
    //           },
    //         },
    //       })),
    //     },
    //   };
    //   return brandBody;
    // }
    console.log('updateBodyRepo', updateBody.brands);
    const { brands } = updateBody;
    console.log(id);
    const result = await db.store.update({
      data: {
        brands: {
          connect: {
            storeId_brandId: {
              brandId: brands.map(brandData => ({
                brand: {
                  connect: {
                    id: brandData,
                  },
                },
              })),
              storeId: id,
            },
          },
        },
      },
      where: { id },
      select: {
        id: true,
        name: true,
        Address: { select: { id: true } },
        brands: {
          select: {
            brand: {
              select: {
                id: true,
                name: true,
                Car: {
                  select: { name: true, model: true, imageUrl: true },
                  where: { storeId: id },
                },
              },
            },
          },
        },
      },
    });
    console.log('result', result);
    return result;
  } catch (error) {
    console.log('error', error);

    throw {
      message: 'Não foi possivel atualizar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
