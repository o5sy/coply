import { Category } from '@/apis/models/video';
import { categoryItems } from '@/constants/type-label-map';
import { levelFilterItems } from '@/containers/pages/explore/constants';
import { FilterLevel } from '@/containers/pages/explore/models';
import { cn } from '@/utils/styling';

export interface ExploreFilterProps {
  className?: string;
  level: FilterLevel;
  categories: Category[];
  onLevelChange: (level: FilterLevel) => void;
  onCategoryChange: (category: Category, checked: boolean) => void;
}

export function ExploreFilter({
  className,
  level,
  categories,
  onCategoryChange,
  onLevelChange,
}: ExploreFilterProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {/* 난이도 */}
      <fieldset>
        <legend className="text-md pb-[16px] font-bold">난이도</legend>
        <div className="flex flex-col gap-[8px]">
          {Array.from(levelFilterItems).map(([key, label]) => {
            return (
              <label key={key} className="flex gap-[8px]">
                <input
                  type="radio"
                  name="level"
                  value={key}
                  checked={key === level}
                  onChange={() => onLevelChange(key)}
                />
                {label}
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* 카테고리 */}
      <fieldset>
        <legend className="text-md pb-[16px] font-bold">카테고리</legend>
        <div className="flex flex-col gap-[8px]">
          {Array.from(categoryItems).map(([key, label]) => {
            return (
              <label key={key} className="flex gap-[8px]">
                <input
                  type="checkbox"
                  name="category"
                  value={key}
                  checked={categories.includes(key)}
                  onChange={(e) => onCategoryChange(key, e.target.checked)}
                />
                {label}
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
