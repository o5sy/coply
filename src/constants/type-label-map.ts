import { CategoryUnion, LevelUnion } from '@/apis/models/video';

export const categoryItems = new Map<CategoryUnion, string>([
  ['FE', '프론트엔드'],
  ['BE', '백엔드'],
  ['PREPARE', '기초'],
  ['INTRODUCTION', '소개'],
]);

export const levelItems = new Map<LevelUnion, string>([
  ['BEGINNER', '입문'],
  ['LOW', '초급'],
  ['MIDDLE', '중급 이상'],
]);
