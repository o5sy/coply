import { CategoryUnion } from '@/apis/models/video';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { categoryItems } from '@/constants/type-label-map';

interface CategoryDropdownProps {
  category: CategoryUnion;
  onSelect: (category: CategoryUnion) => void;
}

export function CategoryDropdown({
  category,
  onSelect,
}: CategoryDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full text-left">
        {categoryItems.get(category)}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>카테고리</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={category}
          onValueChange={(value) => onSelect(value as CategoryUnion)}
        >
          {Array.from(categoryItems).map(([key, label]) => (
            <DropdownMenuRadioItem key={key} value={key}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
