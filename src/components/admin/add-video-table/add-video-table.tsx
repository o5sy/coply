/* eslint-disable react/jsx-key */
import { TableCell, TableRow } from '@/components/ui/table';
import { CategoryDropdown } from '../category-dropdown';
import { DataTable } from '../data-table/data-table';
import {
  TableHeaderDef,
  TableRowDef,
} from '../data-table/types/data-table.type';
import { LevelDropdown } from '../level-dropdown';

interface AddVideoTableProps {
  onAdd: () => void;
}

export function AddVideoTable({ onAdd }: AddVideoTableProps) {
  const headers: TableHeaderDef[] = [
    { key: 'id', className: 'min-w-28' },
    {
      key: 'category',
      contents: '카테고리',
      className: 'w-28',
    },
    { key: 'level', contents: '난이도', className: 'w-28' },
    { key: 'delete', contents: '', className: 'w-10' },
  ];

  // 데이터 받아온걸로 뿌려줌
  const rows: TableRowDef[] = [
    {
      key: '1',
      columns: [
        'example',
        <CategoryDropdown category="FE" onSelect={() => {}} />,
        <LevelDropdown levels={['BEGINNER']} onCheck={() => {}} />,
        <button className="opacity-0 group-hover:opacity-100" type="button">
          X
        </button>,
      ],
      className: 'group',
    },
  ];

  return (
    <DataTable
      headers={headers}
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
