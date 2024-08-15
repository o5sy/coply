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
  level: LevelUnion;
  onChange: (level: LevelUnion) => void;
}

export function LevelDropdown({ level, onChange }: LevelDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="line-clamp-1 w-full text-left">
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
