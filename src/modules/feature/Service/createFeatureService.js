import { HttpStatusCode } from 'axios';
import { createFeatureRepo } from '../Repository/createFeatureRepo.js';
import { findFeatureByName } from '../Repository/findFeatureByName.js';
import { findArrayCarById } from '../../car/Repository/findArrayCarById.js';

export const createFeatureService = async (featureObject, carId) => {
  try {
    let carsEncoutered = [];
    const existentCarId = await findArrayCarById()
    if (existentCarId !== null) {
      let carIdFromExistentCarId;
      for (let i = 0; i < existentCarId[0].cars.length; i++) {
        carIdFromExistentCarId = existentCarId[0].cars[i];
        for (let i = 0; i < carId.length; i++) {
          const found = carIdFromExistentCarId.carId.matchAll(carId[i]); 
          for (const match of found) {
            carsEncoutered.push(match[0])
          }
        }
      }
    }
    
    if (carsEncoutered.length !== carId.length) {
      throw{
        message: `Apenas os carros de ids ${carsEncoutered} existem, verifique os outros`,
        status: HttpStatusCode.BadRequest
      }
    }

    const featureByNameFromRepo = await findFeatureByName(featureObject.name);

    if (featureByNameFromRepo) {
      throw {
        message: 'Caracteristica deste nível de carro já existente',
        status: HttpStatusCode.BadRequest,
      };
    }

    const featureFromRepo = await createFeatureRepo(featureObject, carId);
    if (!featureFromRepo) {
      throw {
        message: 'Não foi possível criar a característica',
        status: HttpStatusCode.BadRequest,
      };
    }
    return featureFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
