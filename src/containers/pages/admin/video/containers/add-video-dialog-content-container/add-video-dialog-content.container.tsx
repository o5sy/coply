import { useReducer } from 'react';
import { AddVideoTable } from '@/components/admin/add-video-table';
import { Button } from '@/components/shared';
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { manageVideoReducer } from './reducers';
import { getInitialVideos } from './utils';

export function AddVideoDialogContentContainer() {
  const [videoItems, dispatch] = useReducer(
    manageVideoReducer,
    getInitialVideos(),
  );

  return (
    <>
      <DialogHeader>
        <DialogTitle>영상 추가</DialogTitle>
      </DialogHeader>

      <AddVideoTable
        items={videoItems}
        onAdd={() => dispatch({ type: 'addItem' })}
        onRemove={(id) => dispatch({ type: 'removeItem', id })}
        onSelectCategory={(id, category) =>
          dispatch({ type: 'updateCategory', payload: { id, category } })
        }
        onCheckLevel={(id, level, checked) =>
          dispatch({ type: 'updateLevel', payload: { id, level, checked } })
        }
      />

      <DialogFooter>
        <Button>취소</Button>
        <Button>저장</Button>
      </DialogFooter>
    </>
  );
}
