# 공개 게임의 출시 상태 갱신

2026-10-24 사용자 요청 “새롭게 론칭된 게임들이 있어서 상태 갱신이 한번 필요하다.”에 따라 기존 공식 사이트의 제품 원장을 갱신한다. 작업 티켓은 [#95](https://github.com/seorilabs/seorilabs-official/issues/95)다.

| 제품            | 현재 표시                 | 반영할 표시                        |
| --------------- | ------------------------- | ---------------------------------- |
| 베른할드 연대기 | 준비 중, 스토어 링크 없음 | 서비스 중, Google Play             |
| 블룸핸드        | 서비스 중, App Store      | 서비스 중, Google Play와 App Store |

두 게임의 한국과 미국 Google Play 페이지에서 패키지, 등록명, 짧은 소개, 설치 버튼과 무료 제공 상태를 확인했다. 제품 등록명과 소개는 해당 언어의 공개 문구를 그대로 사용한다. 베른할드의 정확한 최초 출시일은 확인되지 않아 `releasedOn`을 추정해 넣지 않는다. App Store 공개를 확인하지 못한 베른할드와 출시 전 제품은 기존 상태를 유지한다.

- [베른할드 한국](https://play.google.com/store/apps/details?id=com.seorilabs.vernhald&hl=ko&gl=KR), [미국](https://play.google.com/store/apps/details?id=com.seorilabs.vernhald&hl=en&gl=US)
- [블룸핸드 한국](https://play.google.com/store/apps/details?id=com.seorilabs.bloomhand&hl=ko&gl=KR), [미국](https://play.google.com/store/apps/details?id=com.seorilabs.bloomhand&hl=en&gl=US)

기존 `registry.ts` 데이터만 바꾸며 목록, 홈 제품 수와 검색용 구조화 데이터는 기존 파생 구조를 사용한다. 새 화면과 레이아웃, 게임 코드, 스토어 콘솔은 변경하지 않는다. 외부 조회 실패는 출시 근거로 사용하지 않는다.

검수는 L1 개발 환경이다. 인수조건 CATALOG-01은 베른할드가 한영 서비스 목록에만 나타나고 Google Play로 연결되는 것이다. CATALOG-02는 블룸핸드의 두 스토어 링크와 한영 문구가 공개 등록정보와 일치하는 것이다. CATALOG-03은 홈 제품 수, 준비 중 목록, 언어 전환과 작은 화면 표시가 기존 구조로 동작하는 것이다. 정적 메타데이터 갱신에는 새 단위 테스트를 만들지 않고 공개 원문 대조, 기존 타입 및 빌드 검사, 실제 브라우저 실행으로 검증한다.

이번 요청에 따른 공식 사이트 갱신을 브랜치와 PR로 반영하고 기존 Pages 배포 후 한영 공개 목록을 확인한다. 테스트 계획의 출시 대상은 기존 웹사이트이며 게임 마켓의 배포나 제출을 포함하지 않는다. 공개 전 중앙 검증기를 실행한다. 되돌림이 필요하면 해당 원장 변경을 후속 PR로 되돌린다. 실행 원본은 NAS1dual에 복사하고 크기와 SHA-256 확인 후 로컬에서 정리한다.
