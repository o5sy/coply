import { ReactNode, HTMLAttributes } from 'react';

export interface TableHeaderDef extends HTMLAttributes<HTMLTableCellElement> {
  key: string;
  contents?: ReactNode; // undefined 일 경우 key 값을 렌더링
}

export interface TableRowDef extends HTMLAttributes<HTMLTableRowElement> {
  key: string;
  columns: ReactNode[];
}

// Cell 간 순서 변경 기능은 없어서 key 값으로 인덱스를 써도 문제는 없음
// export interface TableColumnDef extends HTMLAttributes<HTMLTableCellElement> {
//   key: string;
//   contents: ReactNode;
// }
