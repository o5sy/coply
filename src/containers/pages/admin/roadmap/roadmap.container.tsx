import { Pagination } from '@/components/shared';

export function RoadmapContainer() {
  return (
    <main className="layout pt-10">
      {/* title */}
      <div className="flex justify-between">
        <h1 className="text-4xl">Roadmaps</h1>
        {/* <DialogTriggerWrapper
          open={open}
          onOpenChange={setOpen}
          trigger={<Button>+ 추가</Button>}
          dialogContent={
            <AddVideoDialogContentContainer onSuccess={() => setOpen(false)} />
          }
        /> */}
      </div>

      {/* table */}
      {/* <div className="overflow-auto">
        <DataTable headers={headers} rows={rows} />
      </div> */}

      {/* pagination */}
      <div className="flex justify-center pt-10">
        <Pagination
          page={1}
          totalPage={10}
          onPrev={() => {}}
          onNext={() => {}}
          onChange={() => {}}
        />
      </div>
    </main>
  );
}
