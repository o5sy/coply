import { produce } from 'immer';
import { Reducer } from 'react';
import { Category, Level } from '../models';

export type UpdateSearchFilterAction =
  | { type: 'level'; payload: Level }
  | { type: 'category'; payload: Category };

type UpdateSearchFilterState = {
  level: Level;
  category: Category;
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
    case 'category':
      return produce(prevState, (draft) => {
        draft.category = action.payload;
      });
    default:
      return prevState;
  }
};
