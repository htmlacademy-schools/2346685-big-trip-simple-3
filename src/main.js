import BoardPresenter from './presenter/board-presenter';
import ModelPoint from './model/point-model';
import FilterModel from './model/filter-model';
import ModelOffers from './model/offers-model';
import ModelDestinations from './model/destinations-model';
import FilterPresenter from './presenter/filter-presenter';
import { render } from './render';
import AddPointButton from './view/add_point-button';
import PointApiService from './api/point-api-service';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');
const placeForButton = document.querySelector('.trip-main');

const AUTHORIZATION = 'Basic kTy9gIdsz2317rD';
const END_POINT = 'https://18.ecmascript.pages.academy/big-trip';
const waypointsApiService = new PointApiService(END_POINT, AUTHORIZATION);

const modelWaypoints = new ModelPoint({ waypointsApiService });
const modelFilter = new FilterModel();
const modelOffers = new ModelOffers({ waypointsApiService });
const modelDestinations = new ModelDestinations({ waypointsApiService });

const boardPresenter = new BoardPresenter({
  boardContainer: container,
  waypointsModel: modelWaypoints,
  modelOffers,
  modelDestinations,
  modelFilter,
  onNewWaypointDestroy: handleNewTaskFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: siteHeaderElement,
  modelFilter,
  modelWaypoints
});

const newWaypointButtonComponent = new AddPointButton({
  onClick: handleNewTaskButtonClick
});

function handleNewTaskFormClose() {
  newWaypointButtonComponent.element.disabled = false;
}

function handleNewTaskButtonClick() {
  boardPresenter.createWaypoint();
  newWaypointButtonComponent.element.disabled = true;
}

filterPresenter.init();
boardPresenter.init();
modelWaypoints.init()
  .finally(() => {
    render(newWaypointButtonComponent, placeForButton);
  });
