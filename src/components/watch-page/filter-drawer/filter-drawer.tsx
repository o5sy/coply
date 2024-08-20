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
      <aside className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden bg-white">
        {/* header */}
        <FilterDrawerHeader onClose={onClose} />

        {/* filter */}
        <div className="h-full overflow-y-auto px-8 py-4">
          <ExploreFilter {...filterProps} />
        </div>
      </aside>
    </Portal>
  );
}
