import { createAction } from "redux-actions";

export const editNameFilter = createAction(
  "FILTERS_ACTIONS__EDIT_NAME_FILTER",
  (name: string): { name: string } => ({ name }),
);

export const editMinPriceFilter = createAction(
  "FILTERS_ACTIONS__EDIT_MIN_PRICE_FILTER",
  (min: number): { min: number } => ({ min }),
);

export const editMaxPriceFilter = createAction(
  "FILTERS_ACTIONS__EDIT_MAX_PRICE_FILTER",
  (max: number): { max: number } => ({ max }),
);

export const editAvailabilityFilter = createAction(
  "FILTERS_ACTIONS__EDIT_AVAILABILITY_FILTER",
  (available: boolean): { available: boolean } => ({ available }),
);
