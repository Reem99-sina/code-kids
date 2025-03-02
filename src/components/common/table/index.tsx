import clsx from 'clsx';

import { Row } from './row-component';
import { HeadRow } from './head-row.component';
import { Spinner } from '../spinner.component';

export interface Column {
  title?: string;
  accessor: string;
}

interface Props<T> {
  columns: Column[];
  items: T[];
  href?: string;
  isLoading?: boolean;
}

export const Table = <T,>({
  columns,
  items,
  href = '#',
  isLoading,
}: Props<T>) => {
  return (
    <div className='relative w-full table-auto overflow-auto rounded-md'>
      <table className={clsx(' w-full border-collapse text-xs text-[#58595B]')}>
        <thead>
          <HeadRow columns={columns} />
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className='h-[250px]'>
                <div className='flex flex-1 items-center justify-center'>
                  <Spinner />
                </div>
              </td>
            </tr>
          ) : !items?.length ? (
            <tr>
              <td colSpan={columns.length} className='h-[250px]'>
                <div className='flex flex-1 items-center justify-center'>
                  <p>No data found</p>
                </div>
              </td>
            </tr>
          ) : (
            items?.map((item, index) => {
              const isFirstRow = index === 0;
              const isLastRow = index === items.length - 1;

              return (
                <Row<T>
                  key={index}
                  item={item}
                  columns={columns}
                  index={index}
                  isFirstRow={isFirstRow}
                  isLastRow={isLastRow}
                  href={href}
                />
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
