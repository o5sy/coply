import CalendarIcon from 'public/calendar.svg';
import CloseIcon from 'public/close.svg';
import UserIcon from 'public/user.svg';

interface VideoInfoSectionProps {
  title: string;
  channelName: string;
  uploadedAt: string;
  description: string;
  onClose: () => void;
}

export function VideoInfoSection({
  title,
  channelName,
  uploadedAt,
  description,
  onClose,
}: VideoInfoSectionProps) {
  return (
    <div className="flex h-full w-[400px] flex-col overflow-hidden bg-gray-600 px-[24px] py-[30px]">
      <div className="flex">
        {/* title */}
        <h1 className="flex-1 text-3xl font-bold text-white">{title}</h1>
        <button
          type="button"
          className="flex-center h-[36px] w-[36px] items-start p-[4px] hover:bg-gray-500"
          onClick={onClose}
        >
          <CloseIcon stroke="white" strokeWidth={3} alt="영상 정보" />
        </button>
      </div>

      {/* channel */}
      <div className="flex items-center gap-1 pt-[12px] text-gray-300">
        <UserIcon className="[&>path]:fill-gray-300" width={20} height={20} />
        {channelName}
      </div>

      {/* upload date */}
      <div className="flex items-center gap-1 pt-[8px] text-gray-300">
        <CalendarIcon
          className="[&>path]:fill-gray-300"
          width={20}
          height={20}
        />
        {uploadedAt}
      </div>

      {/* description */}
      <div className="mt-[24px] overflow-auto whitespace-pre-wrap break-words leading-6 text-gray-300">
        {description}
      </div>
    </div>
  );
}
