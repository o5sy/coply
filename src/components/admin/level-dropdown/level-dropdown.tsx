import { LevelUnion } from '@/apis/models/video';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { levelItems } from '@/constants/type-label-map';

interface LevelDropdownProps {
  levels: LevelUnion[];
  onCheck: (checked: boolean, level: LevelUnion) => void;
}

export function LevelDropdown({ levels, onCheck }: LevelDropdownProps) {
  const label = levels.reduce((result, level, index) => {
    if (index === 0) return levelItems.get(level) ?? '';
    return `${result}, ${levelItems.get(level)}`;
  }, '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="line-clamp-1 w-full text-left">
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>난이도</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Array.from(levelItems).map(([key, label]) => (
          <DropdownMenuCheckboxItem
            key={key}
            checked={levels.includes(key)}
            onCheckedChange={(checked) => onCheck(checked, key)}
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
