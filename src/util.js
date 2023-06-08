import dayjs from 'dayjs';
import { offers } from './mock/data.js';
import { FilterType } from './const.js';

export const getRadomNumber = (start, end) =>
  Math.round(Math.random() * (end - start) + start);

export const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];
export const getRandomPrice = () => Math.floor(Math.random() * 1000) + 100;
export const getRandomId = () => Math.floor(Math.random() * 100) + 1;
export const getRandomPicture = () => `http://picsum.photos/248/152?r=${getRandomId()}`;

export const convertToEventDateTime = (date) => date.substring(0, date.indexOf('T'));
export const convertToEventDate = (date) => dayjs(date).format(EVENT_DATE_FORMAT);
export const convertToDateTime = (date) => date.substring(0, date.indexOf('.'));
export const convertToTime = (date) => dayjs(date).format(TIME_FORMAT);
export const convertToUpperCase = (type) => type.charAt(0).toUpperCase() + type.slice(1);
export const convertToFormDate = (date) => dayjs(date).format(FORM_DATE_FORMAT);
export const convertToBasicFormat = (date) => dayjs(date).format(BASIC_DATE_FORMAT);