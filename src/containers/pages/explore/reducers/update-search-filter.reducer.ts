import { produce } from 'immer';
import { Reducer } from 'react';
import { Category, Level } from '../models';

export type UpdateSearchFilterAction =
  | { type: 'level'; payload: Level }
  | { type: 'categories'; payload: { category: Category; checked: boolean } };

type UpdateSearchFilterState = {
  level: Level;
  categories: Category[];
};

export const updateSearchFilterReducer: Reducer<
  UpdateSearchFilterState,
  UpdateSearchFilterAction
> = (prevState, action) => {
  switch (action.type) {
    case 'level':
      return produce(prevState, (draft) => {
        draft.level = action.payload;
      });
    case 'categories':
      return produce(prevState, (draft) => {
        if (
          action.payload.checked &&
          !draft.categories.includes(action.payload.category)
        ) {
          draft.categories = [...draft.categories, action.payload.category];
        } else if (!action.payload.checked) {
          draft.categories = draft.categories.filter(
            (category) => category !== action.payload.category,
          );
        }
      });
    default:
      return prevState;
  }
};
