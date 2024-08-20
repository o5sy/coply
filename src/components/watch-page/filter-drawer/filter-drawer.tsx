import { Portal } from '../../shared';
import { ExploreFilter, ExploreFilterProps } from '../explore-filter';
import { FilterDrawerHeader } from './filter-drawer-header';

interface FilterDrawerProps {
  filterProps: ExploreFilterProps;
  onClose: () => void;
}

export function FilterDrawer({ filterProps, onClose }: FilterDrawerProps) {
  return (
    <Portal>
      <div className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden bg-white">
        <div className="flex h-full flex-col">
          {/* header */}
          <FilterDrawerHeader onClose={onClose} />

          {/* filter */}
          <ExploreFilter
            className="h-full flex-1 overflow-y-auto px-8 py-4"
            {...filterProps}
          />
        </div>
      </div>
    </Portal>
  );
}
