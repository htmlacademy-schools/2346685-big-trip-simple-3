import AbstractView from '../framework/view/abstract-view';
import { SortType } from '../constants';

function createSortItemTemplate(sortType) {
  const type = sortType.text;
  return `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}">
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>`;
}

function createSortingTemplate() {
  const sortItemsTemplate = Object.values(SortType).map((sortType) => createSortItemTemplate(sortType)).join('');
  return (`
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${sortItemsTemplate}
  </form>`
  );
}

export default class Sorting extends AbstractView {
  #currentSortType = null;

  constructor({currentSortType, onSortTypeChange}) {
    super();
    this.#currentSortType = currentSortType;
    this._callback.onSortTypeChange = onSortTypeChange;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortingTemplate(this.#currentSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this._callback.onSortTypeChange(evt.target.value);
  };
}
