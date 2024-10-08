/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-key */
import { Category, Level } from '@/apis/models/video';
import { TableCell, TableRow } from '@/components/ui/table';
import {
  MANAGE_VIDEO_ITEM_MAX_COUNT,
  MANAGE_VIDEO_ITEM_MIN_COUNT,
  ManageVideoItem,
} from '@/containers/pages/admin/video/containers/add-video-dialog-content-container/reducers';
import { CategoryDropdown } from '../category-dropdown';
import { DataTable } from '../data-table/data-table';
import {
  TableHeaderDef,
  TableRowDef,
} from '../data-table/types/data-table.type';
import { LevelDropdown } from '../level-dropdown';

interface AddVideoTableProps {
  items: ManageVideoItem[];
  onAdd: () => void;
  onChangeVideoId: (id: string, videoId: string) => void;
  onChangeLevel: (id: string, level: Level) => void;
  onCheckCategory: (id: string, category: Category, checked: boolean) => void;
  onRemove: (id: string) => void;
}

export function AddVideoTable({
  items,
  onAdd,
  onRemove,
  onChangeVideoId,
  onCheckCategory,
  onChangeLevel,
}: AddVideoTableProps) {
  const showAddButton = items.length < MANAGE_VIDEO_ITEM_MAX_COUNT;

  const rows: TableRowDef[] = items.map((item) => ({
    key: item.id,
    columns: [
      <input
        type="text"
        defaultValue={item.videoId}
        placeholder="youtube video id"
        onBlur={(event) => onChangeVideoId(item.id, event.currentTarget.value)}
      />,
      <CategoryDropdown
        categories={item.categories}
        onCheck={(checked, category) =>
          onCheckCategory(item.id, category, checked)
        }
      />,
      <LevelDropdown
        level={item.level}
        onChange={(level) => onChangeLevel(item.id, level)}
      />,
      items.length > MANAGE_VIDEO_ITEM_MIN_COUNT && (
        <button
          className="opacity-0 group-hover:opacity-100"
          type="button"
          onClick={() => onRemove(item.id)}
        >
          X
        </button>
      ),
    ],
    className: 'group text-sm',
  }));

  return (
    <DataTable
      headers={HEADERS}
      rows={rows}
      footer={
        showAddButton && (
          <TableRow>
            <TableCell colSpan={4}>
              <button
                className="w-full text-left"
                type="button"
                onClick={onAdd}
              >
                + 추가
              </button>
            </TableCell>
          </TableRow>
        )
      }
    />
  );
}

const HEADERS: TableHeaderDef[] = [
  { key: 'youtube video id', contents: '영상 id', className: 'min-w-28' },
  {
    key: 'category',
    contents: '카테고리',
    className: 'w-28',
  },
  { key: 'level', contents: '난이도', className: 'w-44' },
  { key: 'remove', contents: '', className: 'w-10' },
];
