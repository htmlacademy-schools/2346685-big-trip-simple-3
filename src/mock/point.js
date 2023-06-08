import {getRandomArrayElement, getRandomPrice} from '../util';
import {fromToDates, getArrayFromType, pointType } from './data';
import { getRandomDestination } from './destination';

const pointsId = [];

const getRandomPoint = () => {
  let id = 0;
  while (pointsId.includes(id)) {
    id += 1;
  }
  pointsId.push(id);
  const basePrice = getRandomPrice();
  const dates = getRandomArrayElement(fromToDates);
  const dateFrom = dates.dateFrom;
  const dateTo = dates.dateTo;
  const destination = getRandomDestination();
  const type = getRandomArrayElement(pointType);
  const offers = getArrayFromType(type);

  return {
    basePrice, dateFrom, dateTo, destination, id, offers, type
  };
};

export {getRandomPoint};
