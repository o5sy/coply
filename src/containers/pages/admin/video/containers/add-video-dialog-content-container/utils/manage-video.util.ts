import { uniqueId } from 'lodash';
import { ManageVideoItem } from '../reducers';

export const getInitialVideos = (count: number = 1): ManageVideoItem[] => {
  return Array.from({ length: count }, () => ({
    id: uniqueId(),
    videoId: '',
    categories: ['FE'],
    levels: ['BEGINNER'],
  }));
};
