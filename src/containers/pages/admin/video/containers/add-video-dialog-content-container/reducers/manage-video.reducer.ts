import { produce } from 'immer';
import { uniqueId } from 'lodash';
import { Reducer } from 'react';
import { CategoryUnion, LevelUnion } from '@/apis/models/video';

export const MANAGE_VIDEO_ITEM_MIN_COUNT = 1;
export const MANAGE_VIDEO_ITEM_MAX_COUNT = 10;

export interface ManageVideoItem {
  id: string;
  videoId: string;
  categories: CategoryUnion[];
  // todo 단일 선택으로 변경
  levels: LevelUnion[];
}

type ManageVideoAction =
  | { type: 'addItem' }
  | { type: 'updateVideoId'; payload: { id: string; videoId: string } }
  | {
      type: 'updateCategory';
      payload: { id: string; category: CategoryUnion; checked: boolean };
    }
  | {
      type: 'updateLevel';
      payload: { id: string; level: LevelUnion; checked: boolean };
    }
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
          levels: ['BEGINNER'],
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
        // const index = draft.findIndex((item) => item.id === action.payload.id);
        // if (index !== -1) {
        //   if (action.payload.checked) {
        //     draft[index].levels.push(action.payload.level);
        //   } else {
        //     draft[index].levels = draft[index].levels.filter(
        //       (item) => item !== action.payload.level,
        //     );
        //   }
        // }
        // todo 단일 선택 임시 설정
        const index = draft.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          draft[index].levels = [action.payload.level];
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
