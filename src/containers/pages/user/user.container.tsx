import { UserSectionContainer } from './containers/user-section.container';
import { WatchingHistorySectionContainer } from './containers/watching-history-section.container';

export function UserContainer() {
  return (
    <main className="mb-[100px] w-full">
      <div className="layout">
        {/* 유저 정보 */}
        <UserSectionContainer />

        {/* 시청 기록 */}
        <WatchingHistorySectionContainer />
      </div>
    </main>
  );
}
