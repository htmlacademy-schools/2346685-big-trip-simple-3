const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
};

const FilterTypeDescriptions = {
  [FilterType.EVERYTHING]: 'EVERYTHING',
  [FilterType.PAST]: 'PAST',
  [FilterType.FUTURE]: 'FUTURE',
};

const UpdateType = {
  PATH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const SortType = {
  DAY: { text: 'day' },
  EVENT: { text: 'event' },
  TIME: { text: 'time' },
  PRICE: { text: 'price' },
  OFFERS: { text: 'offer' }
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const isEscapeKey = (evt) => evt.key === 'Escape';

export { FilterType, FilterTypeDescriptions, UpdateType, SortType, UserAction, pointTypes, isEscapeKey };
