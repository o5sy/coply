# Coply (코플리) 
YouTube 개발 영상 중, 추천하고 싶은 콘텐츠를 카테고리 별로 모아볼 수 있는 서비스

## 주요 기술
- [Next.js](https://github.com/vercel/next.js) pages router
- [Axios](https://github.com/axios/axios): HTTP 통신을 간편하게 처리하기 위해 사용
- [TanStack/Query](https://github.com/tanstack/query): 서버 상태를 관리하고, 캐싱을 하고, 필요에 맞게 업데이트해 상태를 동기화하는데 사용
- [Zod](https://github.com/colinhacks/zod): REST API schema 를 정의하고, 응답 데이터 형식을 검증하기 위해 사용
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss): 유틸리티 클래스를 사용해 ui 를 빠르고 쉽게 구현하기 위해 사용
- [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko): YouTube 영상을 재생하고, 플레이어 정보를 받고, 부가 기능을 제공하기 위해 사용
- [shadcn-ui](https://github.com/shadcn-ui/ui), [radix-ui](https://github.com/radix-ui/themes): 관리자 페이지를 빠르게 개발하기 위해 사용
- [eslint](https://github.com/eslint/eslint), [prettier](https://github.com/prettier/prettier)

## 개발 서버 실행
```bash
npm run dev
```

## 브랜치 관리
- 주요 브랜치
  - `main`: 프로덕션 버전 배포 브랜치
  - `develop`: 개발 버전 브랜치
  - `feat`, `fix`, `refactor`: 기능 개발, 수정, 리팩토링 브랜치
- 관리 흐름
  - 초기 설정: `main` -> `develop` 분기
  - 개발 단계
    1. `develop` -> `local/feat/{feat-name}` 분기
    2. 개발
    3. remote 에 push -> pr 생성(`feat/{feat-name}` -> `develop`) -> ci 체크 -> `develop` 에 merge (Squash and merge)
    4. `local/develop` 에 `remote/develop` pull
    5. 이후 반복
  - 배포
    1. pr 생성(`develop` -> `main`) -> `main` 에 merge (Rebase and merge)
    2. github release, 버전 tag 추가
    3. `local/main` 에 `remote/main` pull, `local/develop` 에 `remote/main` pull
   
## 기능
1. 카테고리, 난이도별 조회 (`/explore`)
2. 영상 재생, 시청 기록 저장 (`/watch/{id}`)
3. 구글 로그인 (`/signin`)
4. 유저 정보 조회 (`/user`)
5. 반응형 디자인
