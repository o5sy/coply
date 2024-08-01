import { CategoryUnion } from '@/apis/models/video';

export const categoryItems = new Map<CategoryUnion, string>([
  ['FE', '프론트엔드'],
  ['BE', '백엔드'],
  ['PREPARE', '기초'],
  ['INTRODUCTION', '소개'],
]);
