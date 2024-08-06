/* eslint-disable @typescript-eslint/no-use-before-define */
import { CategoryDropdown } from '@/components/admin/category-dropdown';

import { DataTable } from '@/components/admin/data-table/data-table';
import {
  TableHeaderDef,
  TableRowDef,
} from '@/components/admin/data-table/types/data-table.type';
import { DeleteVideoDialogContent } from '@/components/admin/delete-video-dialog-content';
import { DialogTriggerWrapper } from '@/components/admin/dialog-trigger-wrapper';
import { LevelDropdown } from '@/components/admin/level-dropdown';
import { Pagination } from '@/components/explore-page';
import { Button } from '@/components/shared';
import { AddVideoDialogContentContainer } from './containers/add-video-dialog-content-container';

export function VideoContainer() {
  return (
    <main className="layout pt-10">
      <div className="flex justify-between">
        <h1 className="text-4xl">Videos</h1>
        <DialogTriggerWrapper
          trigger={<Button>+ 추가</Button>}
          dialogContent={<AddVideoDialogContentContainer />}
        />
      </div>
      <div className="overflow-auto">
        <DataTable headers={HEADERS} rows={rows} />
      </div>
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

const dummyVideos = [
  {
    id: '0q0tdEbNci4',
    name: '#1 지금 웹 디자인을 배우는 건 너무 늦었나? - 웹디자인 입문 강좌',
    description:
      '안녕하세요~! 디자인베이스에서 드디어 웹 디자인 입문 강좌를 시작합니다. \n사수가 없어서 시작을 어떻게 해야될지 모르겠어요…”\n“웹디자이너가 되고 싶은 학생인데 학교에서 따로 안 배워요…”\n“전 웹디자이너가 아닌데 회사에서 시켜요…”\n\n일반적으로 웹 디자인 혹은 앱 디자인을 하고 싶은 분들의 가장 큰 고민은 이 3가지라고 생각이 됩니다. 고액의 비용과 시간을 투자해서 학원을 다니기엔 부담되는 경우도 있죠. 물론 세상에 공짜는 없습니다… 초반에 실력 쌓을때까지 학교, 학원, 주변 지인들에게 도움 없이는 시작하기 쉽지 않습니다.. 그래도 제가 있잖아요...ㅋㅋㅋㅋ 응?\n\n웹디자인 입문 강좌 1화에서는 가볍게 해당 강좌 소개와 웹 디자인에 대한 개인적인 생각에 대해 공유합니다.\n\n🌟예제 다운은 멤버십 회원 전용 커뮤니티에 올린 링크에서 받으실 수 있습니다.🌟\n\n🚀 디자인베이스 멤버십 가입하면 다양한 고급 강좌와 예제 파일을 받아볼 수 있어요 🚀\n┗ https://www.youtube.com/channel/UCvYnDMeL-PFZhfIz6oc_U-Q/join\n\n누구나 손쉽게 배우는 디자인 강좌, 디자인베이스입니다. 웹디자인 공부의 첫단추는 디자인베이스에서 시작하세요. 열정만 준비하시면 다 따라 할 수 있습니다. : )\n\n☞ 디자인베이스 소개 : http://designbase.co.kr/about/\n☞ 공식 웹사이트 : http://designbase.co.kr/\n☞ 네이버블로그 : https://blog.naver.com/designbasekorea\n\n\n*BGM 사용 출처\n\nTrack: Syn Cole - Gizmo [NCS Release]\nMusic provided by NoCopyrightSounds.\nWatch: https://youtu.be/pZzSq8WfsKo\nFree Download / Stream: http://ncs.io/Gizmo\n\nTrack: NIVIRO ft. PollyAnna - Fast Lane [NCS Release]\nMusic provided by NoCopyrightSounds.\nWatch: https://youtu.be/DqUQW3xyQ1c\nFree Download / Stream: http://ncs.io/FastLaneYO',
    thumbnailImageUrl: 'https://i.ytimg.com/vi/0q0tdEbNci4/sddefault.jpg',
    uploadedAt: '2020-03-02T02:00:02.000Z',
    duration: 333,
    videoChannel: {
      id: 1,
      name: '디자인베이스',
      description:
        '디자인 첫걸음은 디자인베이스와 함께\n새로운 분야에 첫발을 내디딜 때 누구나 막연하게 두렵죠.\n디자인베이스를 디딤돌 삼아 디자인을 시작해보세요.\n',
      thumbnailImageUrl:
        'https://yt3.ggpht.com/ytc/AIdro_nTCENHJt-c0c3kKHfG0NVgKQ0dJk1Ncf8xfvVXnh5ZiWw=s240-c-k-c0x00ffffff-no-rj',
      subscriberCount: 0,
    },
  },
  {
    id: 'njHQ2aR-m1g',
    name: '#2 이 용어 뭔지 아세요? - 웹디자인 입문 강좌',
    description:
      '오늘은 웹디자인 입문 강좌 두 번째 시간입니다. 웹디자인과 관련된 알아두면 좋은 용어를 살펴보겠습니다. \n어포던스가 뭔지 아시나요? WSG는 뭘까요? LNB는 뭐고 GA는 뭐지...? (아는 분들은 건너뛰셔도 좋습니다.. 입문자 용이에요ㅎㅎ)\n제가 웹 디자인 쪽으로 처음 공부할 때 이해하기 어려운 용어들이 있었지만, 실무로 일해보니까 알고 있어 도움되는 용어들이었습니다. 딱! 20가지로 추려서 공유합니다. \n나중에 예제를 통해 배워보면서 여러분과 저와의 원활한 소통을 위해 용어를 배워두는 것이 좋겠죠? \n\n🌟예제 다운은 멤버십 회원 전용 커뮤니티에 올린 링크에서 받으실 수 있습니다.🌟\n\n🚀 디자인베이스 멤버십 가입하면 다양한 고급 강좌와 예제 파일을 받아볼 수 있어요 🚀\n┗ https://www.youtube.com/channel/UCvYnDMeL-PFZhfIz6oc_U-Q/join\n\n누구나 손쉽게 배우는 디자인 강좌, 디자인베이스입니다. 웹디자인 공부의 첫단추는 디자인베이스에서 시작하세요. 열정만 준비하시면 다 따라 할 수 있습니다. : )\n\n☞ 디자인베이스 소개 : http://designbase.co.kr/about/\n☞ 공식 웹사이트 : http://designbase.co.kr/\n☞ 네이버블로그 : https://blog.naver.com/designbasekorea\n\n\n*BGM 사용 출처\n\nTrack: Syn Cole - Gizmo [NCS Release]\nMusic provided by NoCopyrightSounds.\nWatch: https://youtu.be/pZzSq8WfsKo\nFree Download / Stream: http://ncs.io/Gizmo\n\nTrack: NIVIRO ft. PollyAnna - Fast Lane [NCS Release]\nMusic provided by NoCopyrightSounds.\nWatch: https://youtu.be/DqUQW3xyQ1c\nFree Download / Stream: http://ncs.io/FastLaneYO',
    thumbnailImageUrl: 'https://i.ytimg.com/vi/njHQ2aR-m1g/sddefault.jpg',
    uploadedAt: '2020-03-05T02:00:05.000Z',
    duration: 550,
    videoChannel: {
      id: 1,
      name: '디자인베이스',
      description:
        '디자인 첫걸음은 디자인베이스와 함께\n새로운 분야에 첫발을 내디딜 때 누구나 막연하게 두렵죠.\n디자인베이스를 디딤돌 삼아 디자인을 시작해보세요.\n',
      thumbnailImageUrl:
        'https://yt3.ggpht.com/ytc/AIdro_nTCENHJt-c0c3kKHfG0NVgKQ0dJk1Ncf8xfvVXnh5ZiWw=s240-c-k-c0x00ffffff-no-rj',
      subscriberCount: 0,
    },
  },
  {
    id: 'SoFC7CAd0tc',
    name: '#3 부트스트랩으로 웹 UI 컴포넌트 파악하기 - 웹디자인 입문 강좌',
    description:
      '오늘은 웹디자인 입문 강좌 세 번째 시간입니다. 부트스트랩을 통해 웹 UI 컴포넌트를 알아볼게요. 저번 강좌에서 웹에 전반적인 내용을 알아봤다면, 이번에는 실무에서 사용하는 웹 디자인의 컴포넌트와 엘리먼트 용어를 배워봅시다.\n버튼, 인풋, 테이블, 브래드크럼브, 팝오버, 아코디언, 캐로샐 등의 요소를 알아볼 수 있습니다.\n부트스트랩 사이트 :  http://bootstrapk.com/\n\n🌟예제 다운은 멤버십 회원 전용 커뮤니티에 올린 링크에서 받으실 수 있습니다.🌟\n\n🚀 디자인베이스 멤버십 가입하면 다양한 고급 강좌와 예제 파일을 받아볼 수 있어요 🚀\n┗ https://www.youtube.com/channel/UCvYnDMeL-PFZhfIz6oc_U-Q/join\n\n누구나 손쉽게 배우는 디자인 강좌, 디자인베이스입니다. 웹디자인 공부의 첫단추는 디자인베이스에서 시작하세요. 열정만 준비하시면 다 따라 할 수 있습니다. : )\n\n☞ 디자인베이스 소개 : http://designbase.co.kr/about/\n☞ 공식 웹사이트 : http://designbase.co.kr/\n☞ 네이버블로그 : https://blog.naver.com/designbasekorea\n\n\n*BGM 사용 출처\n\nTrack: Syn Cole - Gizmo [NCS Release]\nMusic provided by NoCopyrightSounds.\nWatch: https://youtu.be/pZzSq8WfsKo\nFree Download / Stream: http://ncs.io/Gizmo\n\nTrack: NIVIRO ft. PollyAnna - Fast Lane [NCS Release]\nMusic provided by NoCopyrightSounds.\nWatch: https://youtu.be/DqUQW3xyQ1c\nFree Download / Stream: http://ncs.io/FastLaneYO',
    thumbnailImageUrl: 'https://i.ytimg.com/vi/SoFC7CAd0tc/sddefault.jpg',
    uploadedAt: '2020-03-16T02:00:02.000Z',
    duration: 664,
    videoChannel: {
      id: 1,
      name: '디자인베이스',
      description:
        '디자인 첫걸음은 디자인베이스와 함께\n새로운 분야에 첫발을 내디딜 때 누구나 막연하게 두렵죠.\n디자인베이스를 디딤돌 삼아 디자인을 시작해보세요.\n',
      thumbnailImageUrl:
        'https://yt3.ggpht.com/ytc/AIdro_nTCENHJt-c0c3kKHfG0NVgKQ0dJk1Ncf8xfvVXnh5ZiWw=s240-c-k-c0x00ffffff-no-rj',
      subscriberCount: 0,
    },
  },
];

const HEADERS: TableHeaderDef[] = [
  { key: 'remove', contents: '' },
  { key: 'id' },
  { key: 'name', contents: '제목' },
  { key: 'description', contents: '설명' },
  { key: 'category', contents: '카테고리' },
  { key: 'level', contents: '난이도' },
];

const rows: TableRowDef[] = dummyVideos.map((video) => ({
  key: video.id,
  columns: [
    <DialogTriggerWrapper
      key="remove"
      trigger={<Button>X</Button>}
      dialogContent={<DeleteVideoDialogContent />}
    />,
    <div key="id" className="w-[100px]">
      {video.id}
    </div>,
    <div key="name" className="line-clamp-1 w-[300px]">
      {video.name}
    </div>,
    <div key="description" className="line-clamp-1 w-[200px]">
      {video.description}
    </div>,
    <div key="category" className="line-clamp-1 w-[80px]">
      <CategoryDropdown category="FE" onSelect={console.log} />
    </div>,
    <div key="level" className="line-clamp-1 w-[80px]">
      <LevelDropdown levels={['BEGINNER', 'MIDDLE']} onCheck={console.log} />
    </div>,
    <div key="channelName" className="line-clamp-1 w-[100px]">
      {video.videoChannel.name}
    </div>,
  ],
  className: 'text-base',
}));
