// import { faker } from 'faker-js';
import { v4 as uuid } from 'uuid';

export const createDataMock = {
  id: uuid(),
  name: 'teste',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const queryStories = [
  {
    id: uuid(),
    name: 'teste',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: 'teste',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
