import { CategoryUnion } from '@/apis/models/video';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { categoryItems } from '@/constants/type-label-map';

interface CategoryDropdownProps {
  categories: CategoryUnion[];
  onCheck: (checked: boolean, category: CategoryUnion) => void;
}

export function CategoryDropdown({
  categories,
  onCheck,
}: CategoryDropdownProps) {
  const label = categories.reduce((result, category, index) => {
    const categoryLabel = categoryItems.get(category) ?? '';
    if (index === 0) return categoryLabel;
    if (!categoryLabel) return result;
    return `${result}, ${categoryLabel}`;
  }, '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full text-left">
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>카테고리</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Array.from(categoryItems).map(([key, label]) => (
          <DropdownMenuCheckboxItem
            key={key}
            checked={categories.includes(key)}
            onCheckedChange={(checked) => onCheck(checked, key)}
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
