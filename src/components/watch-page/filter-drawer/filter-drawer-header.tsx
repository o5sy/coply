import Image from 'next/image';

interface FilterDrawerHeaderProps {
  onClose: () => void;
}

export function FilterDrawerHeader({ onClose }: FilterDrawerHeaderProps) {
  return (
    <div className="separate-line mx-8 flex justify-between py-4">
      <div className="text-xl">필터</div>

      {/* todo CloseButton 분리 */}
      <button
        type="button"
        className="flex-center h-8 w-8 shrink-0 grow-0 items-start rounded-md text-gray-500 hover:bg-gray-200"
        onClick={onClose}
      >
        <Image src="/close.svg" alt="delete" width={24} height={24} />
      </button>
    </div>
  );
}
