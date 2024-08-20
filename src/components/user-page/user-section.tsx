import Image from 'next/image';
import { Button } from '@/components/shared';

interface UserSectionProps {
  email?: string;
  onSignOut: () => void;
  onResign: () => void;
}

export function UserSection({ email, onSignOut, onResign }: UserSectionProps) {
  return (
    <section className="flex justify-between pt-[32px]">
      <div className="flex items-center gap-[30px] text-gray-800">
        <Image
          className="rounded-full bg-primary/30 p-[16px]"
          src="/flag.svg"
          alt="user"
          width={90}
          height={90}
        />
        <div>
          <div className="text-md text-gray-600">내 계정</div>
          <div className="text-xl">{email}</div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex flex-col justify-center gap-[8px]">
        <Button
          colorType="gray"
          variant="outline"
          size="sm"
          onClick={onSignOut}
        >
          로그아웃
        </Button>
        <Button colorType="gray" onClick={onResign} size="sm">
          회원탈퇴
        </Button>
      </div>
    </section>
  );
}
