import { LevelUnion } from '@/apis/models/video';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { levelItems } from '@/constants/type-label-map';

interface LevelDropdownProps {
  // levels: LevelUnion[];
  // onCheck: (checked: boolean, level: LevelUnion) => void;
  level: LevelUnion;
  onChange: (level: LevelUnion) => void;
}

export function LevelDropdown({ level, onChange }: LevelDropdownProps) {
  // const label = levels.reduce((result, level, index) => {
  //   if (index === 0) return levelItems.get(level) ?? '';
  //   return `${result}, ${levelItems.get(level)}`;
  // }, '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="line-clamp-1 w-full text-left">
        {/* {label} */}
        {levelItems.get(level)}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>난이도</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={level}
          onValueChange={(value) => onChange(value as LevelUnion)}
        >
          {Array.from(levelItems).map(([key, label]) => (
            <DropdownMenuRadioItem key={key} value={key}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        {/* {Array.from(levelItems).map(([key, label]) => (
          <DropdownMenuCheckboxItem
            key={key}
            checked={levels.includes(key)}
            onCheckedChange={(checked) => onCheck(checked, key)}
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))} */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
