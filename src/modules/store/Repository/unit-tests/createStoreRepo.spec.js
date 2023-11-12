// import { HttpStatusCode } from 'axios';
// import { createStoreRepo } from '../index.js';
// import jest from 'jest';

// jest.mock('../../../../config/db.js');

// // jest.describe('createStoreRepo', () => {
// //   jest.it('shpuld validate resgister store', async () => {
// //     const mockStore = {
// //       id: '9c9691d5-5c34-4734-81df-a2c3f712203c',
// //     };
// //   });
// // });

// jest.describe('createStoreRepo', () => {
//   jest.it('should create a new store successfully', async () => {
//     const mockStore = {
//       id: 1,
//       name: 'My Store',
//       brands: [
//         {
//           brand: {
//             name: 'Brand 1',
//           },
//         },
//       ],
//     };

//     db.store.create.mockResolvedValue(mockStore);

//     const result = await createStoreRepo({ name: 'My Store', brands: [1] });

//     jest.expect(result).toEqual(mockStore);
//   });

//   jest.it('should throw an error if the store cannot be created', async () => {
//     db.store.create.mockRejectedValue(
//       new Error('Não foi possivel criar a loja')
//     );

//     try {
//       await createStoreRepo({ name: 'My Store', brands: [1] });
//     } catch (error) {
//       jest.expect(error).toEqual({
//         message: 'Não foi possivel criar a loja',
//         status: HttpStatusCode.InternalServerError,
//       });
//     }
//   });
// });
