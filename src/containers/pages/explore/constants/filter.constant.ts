import { Category, Level } from '../models';

export const levelItems = new Map<Level, string>([
  ['all', '전체'],
  ['BEGINNER', '입문'],
  ['LOW', '초급'],
  ['MIDDLE', '중급 이상'],
]);

export const categoryItems = new Map<Category, string>([
  ['all', '전체'],
  ['FE', '프론트엔드'],
  ['BE', '백엔드'],
  ['PREPARE', '기초'],
  ['INTRODUCTION', '소개'],
]);
