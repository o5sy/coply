import { produce } from 'immer';
import { uniqueId } from 'lodash';
import { Reducer } from 'react';
import { Category, Level } from '@/apis/models/video';

export const MANAGE_VIDEO_ITEM_MIN_COUNT = 1;
export const MANAGE_VIDEO_ITEM_MAX_COUNT = 10;

export interface ManageVideoItem {
  id: string;
  videoId: string;
  categories: Category[];
  level: Level;
}

type ManageVideoAction =
  | { type: 'addItem' }
  | { type: 'updateVideoId'; payload: { id: string; videoId: string } }
  | {
      type: 'updateCategory';
      payload: { id: string; category: Category; checked: boolean };
    }
  | { type: 'updateLevel'; payload: { id: string; level: Level } }
  | { type: 'removeItem'; id: string };

export const manageVideoReducer: Reducer<
  ManageVideoItem[],
  ManageVideoAction
> = (prevState, action) => {
  switch (action.type) {
    case 'addItem': {
      if (prevState.length >= MANAGE_VIDEO_ITEM_MAX_COUNT) {
        return prevState;
      }
      return produce(prevState, (draft) => {
        draft.push({
          id: uniqueId(),
          videoId: '',
          categories: ['FE'],
          level: 'BEGINNER',
        });
      });
    }
    case 'updateVideoId': {
      return produce(prevState, (draft) => {
        const index = draft.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          draft[index].videoId = action.payload.videoId;
        }
      });
    }
    case 'updateCategory':
      return produce(prevState, (draft) => {
        const index = draft.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          if (action.payload.checked) {
            draft[index].categories.push(action.payload.category);
          } else {
            draft[index].categories = draft[index].categories.filter(
              (item) => item !== action.payload.category,
            );
          }
        }
      });
    case 'updateLevel':
      return produce(prevState, (draft) => {
        const index = draft.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          draft[index].level = action.payload.level;
        }
      });
    case 'removeItem':
      if (prevState.length <= MANAGE_VIDEO_ITEM_MIN_COUNT) {
        return prevState;
      }
      return produce(prevState, (draft) => {
        const index = draft.findIndex((todo) => todo.id === action.id);
        if (index !== -1) {
          draft.splice(index, 1);
        }
      });
    default:
      return prevState;
  }
};
