import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TableRowDef } from './types/data-table.type';

interface DataTableProps {
  headers: string[];
  rows: TableRowDef[];
}

export function DataTable({ headers, rows }: DataTableProps) {
  return (
    <table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ key, columns, ...props }) => (
          <TableRow key={key} {...props}>
            {columns.map((column, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableCell key={i}>{column}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </table>
  );
}
