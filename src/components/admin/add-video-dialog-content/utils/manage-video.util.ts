import { uniqueId } from 'lodash';
import { ManageVideoState } from '../reducers';

export const getInitialVideos = (count: number = 1): ManageVideoState => {
  return Array.from({ length: count }, () => ({
    id: uniqueId(),
    videoId: '',
    category: 'FE',
    level: ['BEGINNER'],
  }));
};
