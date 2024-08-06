/* eslint-disable react/jsx-key */
import { CategoryUnion, LevelUnion } from '@/apis/models/video';
import { TableCell, TableRow } from '@/components/ui/table';
import { ManageVideoItem } from '@/containers/pages/admin/video/containers/add-video-dialog-content-container/reducers';
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
  onCheckLevel: (id: string, level: LevelUnion, checked: boolean) => void;
  onSelectCategory: (id: string, category: CategoryUnion) => void;
  onRemove: (id: string) => void;
}

export function AddVideoTable({
  items: videos,
  onAdd,
  onRemove,
  onSelectCategory,
  onCheckLevel,
}: AddVideoTableProps) {
  const rows: TableRowDef[] = videos.map((video) => ({
    key: video.id,
    columns: [
      video.videoId,
      <CategoryDropdown
        category={video.category}
        onSelect={(category) => onSelectCategory(video.id, category)}
      />,
      <LevelDropdown
        levels={video.levels}
        onCheck={(checked, level) => onCheckLevel(video.id, level, checked)}
      />,
      <button
        className="opacity-0 group-hover:opacity-100"
        type="button"
        onClick={() => onRemove(video.id)}
      >
        X
      </button>,
    ],
    className: 'group',
  }));

  return (
    <DataTable
      headers={HEADERS}
      rows={rows}
      footer={
        <TableRow>
          <TableCell colSpan={4}>
            <button className="w-full text-left" type="button" onClick={onAdd}>
              + 추가
            </button>
          </TableCell>
        </TableRow>
      }
    />
  );
}

const HEADERS: TableHeaderDef[] = [
  { key: 'id', className: 'min-w-28' },
  {
    key: 'category',
    contents: '카테고리',
    className: 'w-28',
  },
  { key: 'level', contents: '난이도', className: 'w-34' },
  { key: 'delete', contents: '', className: 'w-10' },
];
