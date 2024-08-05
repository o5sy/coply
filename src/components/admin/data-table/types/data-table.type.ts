import { ReactNode, HTMLAttributes } from 'react';

export type TableHeaderDef = {
  key: string;
  contents?: ReactNode; // undefined 일 경우 key 값을 렌더링
};

export interface TableRowDef extends HTMLAttributes<HTMLTableRowElement> {
  key: string;
  columns: ReactNode[]; // undefined 일 경우 key 값을 렌더링
}
