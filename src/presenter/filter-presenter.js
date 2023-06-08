import {render, replace, remove} from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import {FilterType, FilterTypeDescriptions, UpdateType} from '../const.js';
import { filter } from '../utils/filter.js';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #tripPointsModel = null;
  #filterComponent = null;

  constructor({filterContainer, filterModel, tripPointsModel}) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#tripPointsModel = tripPointsModel;

    this.#tripPointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    return [FilterType.EVERYTHING, FilterType.FUTURE, FilterType.PAST].map((type) => ({ type, name: FilterTypeDescriptions[type], count: filter[type](this.#tripPointsModel.tripPoints).length}));
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange
    });

    if (!prevFilterComponent) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}