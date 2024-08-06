import { produce } from 'immer';
import { uniqueId } from 'lodash';
import { Reducer } from 'react';
import { CategoryUnion, LevelUnion } from '@/apis/models/video';

const MIN = 1;
const MAX = 10;

type ManageVideoState = {
  id: string;
  videoId: string;
  category: CategoryUnion;
  level: LevelUnion[];
}[];

type ManageVideoAction =
  | { type: 'addItem' }
  | { type: 'updateVideoId'; payload: { id: string; videoId: string } }
  | { type: 'updateCategory'; payload: { id: string; category: CategoryUnion } }
  | {
      type: 'updateLevel';
      payload: { id: string; level: LevelUnion; checked: boolean };
    }
  | { type: 'removeItem'; id: string };

export const manageVideoReducer: Reducer<
  ManageVideoState,
  ManageVideoAction
> = (prevState, action) => {
  switch (action.type) {
    case 'addItem': {
      if (prevState.length >= MAX) {
        return prevState;
      }
      return produce(prevState, (draft) => {
        draft.push({
          id: uniqueId(),
          videoId: '',
          category: 'FE',
          level: ['BEGINNER'],
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
          draft[index].category = action.payload.category;
        }
      });
    case 'updateLevel':
      return produce(prevState, (draft) => {
        const index = draft.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          if (action.payload.checked) {
            draft[index].level.push(action.payload.level);
          } else {
            draft[index].level = draft[index].level.filter(
              (item) => item !== action.payload.level,
            );
          }
        }
      });
    case 'removeItem':
      if (prevState.length <= MIN) {
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
