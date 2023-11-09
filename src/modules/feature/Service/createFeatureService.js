import {createFeatureRepo} from '../Repository/createFeatureRepo.js'

export const createFeatureService = async (
  massageSystem,
  shielding,
  sunRoof,
  gearLever,
  selfDriving,
  zeroToHundred,
  displacement,
  power,
  velocity
) => {
  try {
    const featureFromRepo = await createFeatureRepo(massageSystem, shielding, sunRoof, gearLever, selfDriving, zeroToHundred, displacement, power, velocity)
    console.log(featureFromRepo);
  } catch (error) {
    
  }


};
